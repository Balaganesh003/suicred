import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import joblib

def generate_synthetic_data(num_samples=1000):
    np.random.seed(42)
    data = {
        'num_transactions': np.random.randint(1, 500, num_samples),
        'total_volume': np.random.uniform(100, 10000, num_samples),
        'unique_counterparties': np.random.randint(1, 100, num_samples),
        'num_contracts': np.random.randint(1, 50, num_samples),
        'governance_events': np.random.randint(0, 10, num_samples),
        'average_transaction_value': np.random.uniform(10, 500, num_samples),
        'account_age': np.random.randint(1, 365, num_samples),
        'reputation_score': np.random.uniform(50, 100, num_samples) 
    }
    return pd.DataFrame(data)

# Train the model
# Train the model
def train_and_save_model():
    df = generate_synthetic_data()

    # Drop governance_events from features
    X = df[['num_transactions', 'total_volume', 'unique_counterparties', 'num_contracts', 
            'average_transaction_value', 'account_age']]
    y = df['reputation_score']

    # Split into training and testing
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train the model
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Evaluate the model
    y_pred = model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    print(f"Model Evaluation:\nMSE: {mse:.2f}\nR2: {r2:.2f}")

    # Save the model
    joblib.dump(model, 'reputation_model.joblib')
    print("Model saved as 'reputation_model.joblib'.")

if __name__ == "__main__":
    train_and_save_model()
