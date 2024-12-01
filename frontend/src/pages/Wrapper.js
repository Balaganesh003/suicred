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
    <div className="min-h-screen bg-[radial-gradient(100%_100%_at_50%_0,rgba(0,122,255,.7)_0,transparent_100%)] bg-black text-white">
      <Navbar />

      <main className="container mx-auto px-4 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-black">
          Your Web3 Wrapped
        </motion.h1>

        <WrapperCard {...wrapperData} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8 text-gray-400">
          Discover your impact on the Sui network over the past year.
        </motion.p>
      </main>
    </div>
  );
}
