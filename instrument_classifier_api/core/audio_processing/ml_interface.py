from tensorflow import keras
import os
from django.conf import settings
import numpy as np


# ml_interface.py - Wrapper for your ML model
class InstrumentClassifier:
    def __init__(self,feature):
        self.model = self._load_model()
        self.feature = feature
    

    def _load_model(self):
        model_path = os.path.join(settings.BASE_DIR, 'trained_models', 'audio_classification_v2.h5')
        model = keras.models.load_model(model_path)
        return model
        
    
    def make_prediction(self,mels,feature = "mfcc",threshold=0.5):
        if len(mels.shape) == 2:
            # Single spectrogram (431, 128) -> (1, 431, 128, 1)
            mels = np.expand_dims(np.expand_dims(mels, axis=0), axis=-1)
        elif len(mels.shape) == 3:
        # Already batched (1, 431, 128) -> (1, 431, 128, 1)
            mels = np.expand_dims(mels, axis=-1)
            
        else:
            raise ValueError(f"Unexpected spectrogram shape: {mels.shape}")
        
        if(feature=="mfcc"):
            if mels.shape[1:3] != (431, 40):
                raise ValueError(f"Expected spectrogram shape (431,40), got {mels.shape[1:3]}")
            
        
        
        # data = mels.reshape(1, 431, 128, 1)
        # prediction =self.model.predict(data)
        # predicted_class = np.argmax(prediction, axis=1)
        
        
        probabilities = self.model.predict(mels)[0]  # Get first (and only) prediction
        binary_predictions = (probabilities > threshold).astype(int)

    # Instrument names in the same order as your CSV columns
        instrument_names = ['bansuri','dhimey','khin',  'madal','sarangi']

    # Create results dictionary
        results = {
            'probabilities': {},
            'detected_instruments': [],
            'raw_probabilities': probabilities,
            'binary_predictions': binary_predictions
        }
        for i, instrument in enumerate(instrument_names):
            results['probabilities'][instrument] = float(probabilities[i])
            if binary_predictions[i] == 1:
                results['detected_instruments'].append(instrument)   
    
        return results
    

model = InstrumentClassifier()