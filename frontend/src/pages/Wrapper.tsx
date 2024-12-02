import Navbar from '../components/Navbar';
import { WrapperCard } from '../components/WrapperCard';
import { motion } from 'framer-motion';

export default function WrapperPage() {
  const wrapperData = {
    numTransactions: 1337,
    totalVolume: 42069.69,
    topContracts: ['0x1234', '0x5678', '0x9abc'],
    peakMonth: 'October',
    uniqueCounterparties: 42,
  };

  return (
    <div className="min-h-screen[ansparent_100%)] bg-_lack_at_t-w_0,">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-gray-200"
          >
            Your Web3 Wrapped
          </motion.h1>
        </div>
        <WrapperCard {...wrapperData} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8 text-gray-400"
        >
          Discover your impact on the Sui network over the past year.
        </motion.p>
      </main>
    </div>
  );
}