import joblib
import numpy as np

model = joblib.load('reputation_model.joblib')

def predict_reputation(features):
    features = np.array(features).reshape(1, -1)
    return model.predict(features)[0]
