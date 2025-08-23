import librosa
from pydub import AudioSegment
import os
import numpy as np
from .extract_feature import wav_to_logmelspec

from io import BytesIO
from django.core.files.uploadedfile import UploadedFile
from rest_framework.exceptions import ValidationError



ALLOWED_EXTENSIONS = {"mp3", "m4a", "aac", "flac", "ogg", "opus", "wav"}
def convert_to_wav(audio):
    """
    Convert ANY supported audio upload to a standard WAV (16-bit/22.05kHz/mono).

    Returns
    -------
    BytesIO
        A seek(0)’d buffer containing the .wav bytes.
    """
    # ext = uploaded_file.name.split(".")[-1].lower()
    # if ext not in ALLOWED_EXTENSIONS:
    #     raise ValidationError(
    #         f"Unsupported file type '.{ext}'. Allowed: {', '.join(ALLOWED_EXTENSIONS)}"
    #     )

    # Load via pydub
    # try:
    #     audio = AudioSegment.from_file(uploaded_file)
    # except Exception as exc:
    #     raise ValidationError("Could not decode audio file.") from exc

    # Convert to the target spec
    audio = (
        audio
        .set_frame_rate(22050)      # 22.05 kHz
        .set_channels(1)             # mono
        .set_sample_width(2)         # 16-bit (2 bytes = 16 bits)
    )

    # Export to memory buffer
    wav_buffer = BytesIO()
    audio.export(
        wav_buffer,
        format="wav",
        codec="pcm_s16le"
    )
    wav_buffer.seek(0)

    return wav_buffer


    
def normalize_audio(audio):
    """Normalize audio amplitude to [-1, 1]"""
    if np.max(np.abs(audio)) > 0:
        audio = audio / np.max(np.abs(audio))
    return audio



def extract_audio_features(audio_chunk):
    """Extract mel spectrograms preprocessing for ML"""
    return wav_to_logmelspec(audio_chunk)

