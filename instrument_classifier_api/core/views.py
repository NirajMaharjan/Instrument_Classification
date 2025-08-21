from django.shortcuts import render

from rest_framework import viewsets
from .models import Instrument, AudioArchive, DetectionResult,AudioFile
from .serializers import InstrumentSerializer, AudioArchiveSerializer, DetectionResultSerializer,AudioFileSerializer


# Create your views here.

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
