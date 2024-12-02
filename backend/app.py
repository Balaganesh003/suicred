from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS 


app = Flask(__name__)

CORS(app)

# Load the trained model and scaler
with open('reputation_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

# Function to generate a summary based on input data
def generate_summary(account_data):
    age, balance, transactions, contracts, volume, counterparties = account_data
    return (
        f"The account has been active for {age} years, with a balance of ${balance}. "
        f"Over the course of {transactions} transactions, it has developed {counterparties} unique counterparties "
        f"and entered into {contracts} contracts, with a total volume of ${volume}. "
        f"This indicates a stable and trustworthy account."
    )

# API endpoint to accept real-time data and return reputation score and summary
@app.route('/update_data', methods=['POST'])
def update_data():
    # Extract data from request
    data = request.json
    account_data = [
        data.get('accountAge', 0),
        data.get('balance', 0),
        data.get('noOfTransactions', 0),
        data.get('numberOfContracts', 0),
        data.get('totalVolume', 0),
        data.get('uniqueCounterParties', 0),
    ]

    # Ensure that the data has exactly 6 features
    if len(account_data) != 6:
        return jsonify({"error": "Input data must have exactly 6 features"}), 400

    try:
        # Scale the data using the same scaler
        scaled_data = scaler.transform([account_data])

        # Predict reputation score using the trained model
        reputation_score = model.predict(scaled_data)[0]

        # Generate a summary
        summary = generate_summary(account_data)

        return jsonify({
            "reputation_score": float(reputation_score),
            "summary": summary
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
