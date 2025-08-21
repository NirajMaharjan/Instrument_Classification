# ml_interface.py - Wrapper for your ML model
class InstrumentClassifier:
    def __init__(self):
        self.model = self.load_model()
    
    def load_model(self):
        """Load your trained model"""
        pass
    
    def predict(self, audio_chunk):
        """Run prediction and return results"""
        pass