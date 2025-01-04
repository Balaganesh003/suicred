
# SuiCred - Reputation Redefined, Powered by SuiCred

Welcome to **SuiCred**, a blockchain-based reputation platform built on the **Sui** network. With SuiCred, we are redefining digital reputation through the power of on-chain data, AI models, and dynamic NFTs. Users can connect their wallet addresses, analyze their on-chain activity, and generate a reputation score that is dynamically tracked in real-time on the blockchain. This score is linked to a minted **Dynamic NFT** that reflects your evolving reputation, giving you full ownership and control over your on-chain identity.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)

## Introduction

**SuiCred** offers an innovative platform where you can:
- Track your on-chain reputation through AI-driven analysis of your blockchain activity.
- Mint a **Dynamic NFT** that evolves with your reputation score over time.
- Take control of your on-chain identity by using a decentralized reputation system powered by the **Sui** blockchain.

The platform is designed for users who want to verify their reputation in the Web3 space, whether for DeFi participation, DAO governance, or gaming.

## Features

- **AI-Powered Reputation Analysis**: Our machine learning model analyzes your on-chain activities such as transactions, unique counterparties, and contracts to generate a reliable reputation score.
  
- **Dynamic NFT Minting**: Your reputation score is stored in a dynamic NFT minted on the Sui blockchain. The NFT updates in real-time as your reputation score evolves.
  
- **Real-Time Score Tracking**: The reputation score is not static; it updates dynamically as your on-chain activity changes, providing an up-to-date view of your reputation.
  
- **Transparent On-Chain Data**: Your blockchain activity and reputation score are publicly available, allowing others to verify your identity and reputation.

- **User-Friendly Interface**: Simple, intuitive design for connecting your wallet, checking your reputation, and viewing your dynamic NFT.

## How It Works

1. **Connect Your Wallet**: Use the platform to connect your wallet. Your on-chain data will be analyzed automatically.
2. **Reputation Analysis**: Based on your wallet's transaction history, the AI model generates a reputation score that represents your on-chain activity.
3. **Dynamic NFT Minting**: Once the reputation score is calculated, it is minted as a **Dynamic NFT**. This NFT will be stored on the Sui blockchain and updated in real-time as your reputation score changes.
4. **Track and View**: You can view your NFT, track changes to your reputation, and share it with others in the Web3 space.

## Tech Stack

- **Frontend**: React, Framer Motion (for animations)
- **Backend**: Flask (Python), AI/ML Model (for reputation score prediction)
- **Blockchain**: Sui Blockchain for minting Dynamic NFTs and storing reputation scores
- **Database**: NoSQL database for storing user data temporarily
- **Other Libraries**: Axios (for API requests), Web3.js (for blockchain interactions)

## Setup and Installation

### Prerequisites

- Python 3.8+
- Node.js and npm
- Sui wallet (for blockchain interaction)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/suicred.git
   cd suicred
   ```

2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the Flask server:

   ```bash
   python app.py
   ```

The backend should now be running on `http://127.0.0.1:5000`.

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

The frontend should now be running on `http://localhost:3000`.

### Blockchain Interaction

Ensure you have a **Sui wallet** to interact with the Sui blockchain. You'll need to integrate it with the platform for minting and storing Dynamic NFTs.

## Usage

- Connect your wallet address.
- The AI model will analyze your wallet's on-chain data.
- Your **Reputation Score** will be displayed along with a **Dynamic NFT**.
- View your NFT and track the live updates of your reputation.



