from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import joblib
from utils.summary_generator import generate_nlg_summary

# Import the preprocess_data function from utils
from utils.data_processing import preprocess_data

app = Flask(__name__)

# Load the pre-trained reputation model
model = joblib.load('./reputation_model.joblib')


# Function to get user data
def get_user_data(wallet_address):
    try:
        # Example: Read from processed_data.csv
        df = pd.read_csv('./data/processed_data.csv')
        df = df.drop(columns=['governance_events'], errors='ignore')
        # Simulate wallet-based filtering (replace with real implementation)
        # For now, fetch the first record as placeholder
        user_data = df.iloc[0].to_dict()  # Replace with wallet-based filtering logic
        return user_data
    except Exception as e:
        print(f"Error fetching user data: {e}")
        return None


# Route for predicting reputation
# Route for predicting reputation
@app.route('/predictReputation', methods=['POST'])
def predict_reputation():
    data = request.json
    wallet_address = data.get('wallet_address')
    if not wallet_address:
        return jsonify({"error": "Wallet address is required"}), 400

    user_data = get_user_data(wallet_address)
    if not user_data:
        return jsonify({"error": "User data not found"}), 404

    # Define the expected model features
    model_columns = ['num_transactions', 'total_volume', 'unique_counterparties',
                     'num_contracts', 'average_transaction_value', 'account_age', 'missing_feature']
    print(f"Expected model features: {model_columns}")

    # Extract features and handle missing or NaN values
    features = [
        user_data.get("num_transactions", 0),
        user_data.get("total_volume", 0),
        user_data.get("unique_counterparties", 0),
        user_data.get("num_contracts", 0),
        user_data.get("average_transaction_value", 0),
        user_data.get("account_age", 0),
        user_data.get("missing_feature", 0)  # Replace with actual missing feature
    ]

    # Replace NaN with 0 explicitly
    features = [0 if pd.isna(feature) else feature for feature in features]
    print(f"Features being passed to the model: {features}")

    # Check for NaN values in features
    if any(np.isnan(feature) for feature in features):
        print("Error: Features still contain NaN values:", features)
        return jsonify({"error": "Invalid feature data (contains NaN values)"}), 400

    # Check if the number of features matches the model's expected input
    if len(features) != len(model_columns):
        print("Error: Feature count mismatch!")
        return jsonify({"error": f"Expected {len(model_columns)} features, but got {len(features)}"}), 400

    # Predict reputation score using the model
    reputation_score = model.predict(np.array(features).reshape(1, -1))[0]
    return jsonify({"reputation_score": round(reputation_score, 2)})


# Route for generating summary
@app.route('/generateSummary', methods=['POST'])
def generate_summary():
    data = request.json
    wallet_address = data.get('wallet_address')
    if not wallet_address:
        return jsonify({"error": "Wallet address is required"}), 400

    # Fetch and preprocess user data
    user_data = get_user_data(wallet_address)
    if not user_data:
        return jsonify({"error": "User data not found"}), 404

    # Add dummy values for additional fields
    user_data['top_contracts'] = ['Contract A', 'Contract B']
    user_data['peak_month'] = 'January'

    # Generate the summary
    summary = generate_nlg_summary(user_data)
    return jsonify({"summary": summary})


# Print all routes for debugging
print(app.url_map)

if __name__ == '__main__':
    app.run(debug=True)
