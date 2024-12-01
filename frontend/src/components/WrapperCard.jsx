import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function WrapperCard({
  numTransactions,
  totalVolume,
  topContracts,
  peakMonth,
  uniqueCounterparties,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-600 to-gray-900 rounded-2xl p-8 shadow-2xl max-w-2xl w-full mx-auto text-white overflow-hidden relative">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        className="absolute top-4 right-4 text-yellow-300">
        <Sparkles size={24} />
      </motion.div>
      <h2 className="text-3xl font-bold mb-6 text-white">Your Sui Wrapped Summary</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4">
        <p>
          <strong>Total Transactions:</strong> {numTransactions}
        </p>
        <p>
          <strong>Total Volume:</strong> {totalVolume.toFixed(2)} SUI
        </p>
        <p>
          <strong>Top Smart Contracts:</strong> {topContracts.join(', ')}
        </p>
        <p>
          <strong>Busiest Month:</strong> {peakMonth}
        </p>
        <p>
          <strong>Unique Counterparties:</strong> {uniqueCounterparties}
        </p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-sm text-blue-100">
        Thank you for being an active member of the Sui community!
      </motion.p>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="absolute -bottom-12 -left-12 w-24 h-24 bg-white/10 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 7,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full"
      />
    </motion.div>
  );
}
