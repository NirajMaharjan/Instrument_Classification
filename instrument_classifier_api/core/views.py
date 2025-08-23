from django.shortcuts import render
from django.core.files.base import File
from django.http import JsonResponse

import uuid
import librosa
import numpy as np


from rest_framework.decorators import api_view
from rest_framework import viewsets
from .models import Instrument, AudioArchive, DetectionResult,AudioFile
from .serializers import InstrumentSerializer, AudioArchiveSerializer, DetectionResultSerializer,AudioFileSerializer


from .audio_processing.audio_utils import convert_to_wav,normalize_audio,extract_audio_features,ALLOWED_EXTENSIONS
from .audio_processing.chunking import create_chunks
from .audio_processing.ml_interface import model
from .audio_processing.aggregation import aggregate

from pydub import AudioSegment




class InstrumentViewSet(viewsets.ModelViewSet):
    queryset = Instrument.objects.all()
    serializer_class = InstrumentSerializer

class AudioArchiveViewSet(viewsets.ModelViewSet):
    queryset = AudioArchive.objects.all()
    serializer_class = AudioArchiveSerializer
    
class AudioFileViewSet(viewsets.ModelViewSet):
    queryset = AudioFile.objects.all()
    serializer_class = AudioArchiveSerializer

class DetectionResultViewSet(viewsets.ModelViewSet):
    queryset = DetectionResult.objects.all()
    serializer_class = DetectionResultSerializer


@api_view(['POST'])
def upload_audio(request):
    
    if 'file' not in request.FILES:
        return JsonResponse({'error': 'No file provided'}, status=400)
    
    uploaded_audio = request.FILES['file']
    
    ext = uploaded_audio.name.split(".")[-1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise ValidationError(
            f"Unsupported file type '.{ext}'. Allowed: {', '.join(ALLOWED_EXTENSIONS)}"
        )
   
    serializer = AudioArchiveSerializer(data={'file':uploaded_audio})
    if serializer.is_valid():
        #only put reques.user ; no condition
        archive = serializer.save(user=request.user if request.user.is_authenticated else None)  # Save uploaded file
        # return JsonResponse({'file saved':'done'})
        print("File saved successfully:", archive.file.name)
    else:
        return JsonResponse(serializer.errors, status=400)

    
    create_chunks(archive)
    print("Up to chunk creation")



    for chunk in archive.audiofile_set.all():
        audio = AudioSegment.from_file(chunk.file.path)
        wav_chunk = convert_to_wav(audio)
        y, sr = librosa.load(wav_chunk, sr=22050)
        y = normalize_audio(y)
        
        #This is the custom one; modify it after building it
        # mels = extract_audio_features(y)
        # predicted_class = model.make_prediction(mels)
        
        #follwoing three lines comment
        npy_file = librosa.feature.mfcc(y=y, sr=22050, n_mfcc=40)
        npy_file = np.transpose(npy_file)
        npy_file = (npy_file - np.mean(npy_file)) / (np.std(npy_file) + 1e-6)
        
        
        predicted_class = model.make_prediction(npy_file)
        print(predicted_class)
        return JsonResponse({'shape':npy_file.shape})
        results = predicted_class.tolist()
 
        
        
        


    #uuid is just a convenient way to generate a unique, collision-free filename so you never accidentally overwrite an existing file on disk
    wav_file = File(wav_buffer,name=f"{uuid.uuid4().hex}.wav")
    # 2. Preprocess audio
    processed_audio, sr = preprocess_audio(audio_record.file.path)
    
    # 3. Chunk and SAVE each chunk to AudioFile table
    chunks = chunk_preprocessed_audio(processed_audio, sr)
    chunk_records = []
    
    for i, chunk in enumerate(chunks):
        # Save each chunk to AudioFile table
        chunk_record = AudioFile.objects.create(
            audio_archive=audio_record,  # foreign key
            chunk_index=i,
            start_time=chunk['start_time'],
            end_time=chunk['end_time'],
            processed=False
        )
        chunk_records.append((chunk_record, chunk['audio_data']))
    
    # 4. Process each chunk and update AudioFile records
    classifier = InstrumentClassifier()
    all_chunk_results = []
    
    for chunk_record, audio_data in chunk_records:
        npy_chunk = audio_to_npy_format(audio_data)
        prediction = classifier.predict(npy_chunk)
        
        # Update chunk record as processed
        chunk_record.raw_prediction = prediction  # JSON field
        chunk_record.processed = True
        chunk_record.save()
        
        all_chunk_results.append(prediction)
    
    # 5. Aggregate results and SAVE to DetectionResult table
    final_results = aggregate_predictions(all_chunk_results)
    
    for instrument_result in final_results:
        DetectionResult.objects.create(
            audio_archive=audio_record,  # foreign key
            instrument_name=instrument_result['instrument'],
            confidence_score=instrument_result['confidence'],
            detection_method='ml_chunked'
        )
    
    # 6. Mark main record as processed
    audio_record.processed = True
    audio_record.save()
    
    return JsonResponse({'success': True, 'results': final_results})