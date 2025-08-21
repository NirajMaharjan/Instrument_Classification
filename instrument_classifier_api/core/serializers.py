from rest_framework import serializers
from .models import Instrument, AudioArchive, AudioFile, DetectionResult

class InstrumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrument
        fields = '__all__'

class AudioArchiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioArchive
        fields = '__all__'

class AudioFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioFile
        fields = '__all__'

class DetectionResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetectionResult
        fields = '__all__'
