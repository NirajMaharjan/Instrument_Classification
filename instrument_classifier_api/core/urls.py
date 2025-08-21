from rest_framework import routers
from django.urls import path, include
from .views import InstrumentViewSet, AudioArchiveViewSet, DetectionResultViewSet, AudioFileViewSet

router = routers.DefaultRouter()
router.register(r'instruments', InstrumentViewSet)
router.register(r'audioarchives', AudioArchiveViewSet)
router.register(r'audiofiles', AudioFileViewSet)
router.register(r'detections', DetectionResultViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
