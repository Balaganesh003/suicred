def generate_nlg_summary(user_data):
    top_contracts = ', '.join(user_data.get('top_contracts', []))
    summary_template = """
    *Your Sui Wrapped Summary:*

    - Total Transactions: {num_transactions}
    - Total Volume: {total_volume:.2f} SUI
    - Top Smart Contracts: {top_contracts}
    - Busiest Month: {peak_month}
    - Unique Counterparties: {unique_counterparties}

    Thank you for being an active member of the Sui community!
    """
    summary = summary_template.format(
        num_transactions=user_data.get('num_transactions', 0),
        total_volume=user_data.get('total_volume', 0.0),
        top_contracts=top_contracts,
        peak_month=user_data.get('peak_month', 'N/A'),
        unique_counterparties=user_data.get('unique_counterparties', 0)
    )
    return summary
