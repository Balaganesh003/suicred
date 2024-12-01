import pandas as pd

def preprocess_data(raw_data):
    df = pd.DataFrame(raw_data)
    df.drop(columns=['governance_events'], errors='ignore', inplace=True)
    df['average_transaction_value'] = df['total_volume'] / df['num_transactions']
    return df
