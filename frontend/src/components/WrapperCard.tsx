import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ThreeDots } from 'react-loader-spinner'; // Add loading spinner library

export function WrapperCard({
  statsData,
  isLoading,
}: {
  statsData: {
    accountAge: number;
    balance: number;
    noOfTransactions: number;
    numberOfContracts: number;
    totalVolume: number;
    uniqueCounterParties: number;
    summary: string;
  };
  isLoading: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-600 to-gray-900 rounded-2xl p-8 shadow-2xl max-w-2xl w-full mx-auto text-white overflow-hidden relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        className="absolute top-4 right-4 text-yellow-300"
      >
        <Sparkles size={24} />
      </motion.div>
      <h2 className="text-3xl font-bold mb-6 text-white">Your Sui Wrapped Summary</h2>

      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <ThreeDots height="50" width="50" color="#ffffff" ariaLabel="loading" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <p>
            <strong>Wallet Age:</strong> {statsData.accountAge} days
          </p>
          <p>
            <strong>Native Balance:</strong> {statsData.balance.toFixed(2)} SUI
          </p>
          <p>
            <strong>Total Transactions:</strong> {statsData.noOfTransactions}
          </p>
          <p>
            <strong>Deployed Contracts:</strong> {statsData.numberOfContracts}
          </p>
          <p>
            <strong>Total Volume:</strong> {statsData.totalVolume.toFixed(2)} SUI
          </p>
          <p>
            <strong>Unique Counterparties:</strong> {statsData.uniqueCounterParties}
          </p>
          <p>
            <strong>Summary:</strong> {statsData.summary}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
