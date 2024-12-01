import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

export function FeatureButton({ title, description, icon, navigate }: { title: string, description: string, icon: JSX.Element, navigate: string }) {
  const navigate1 = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full">
      <button
        onClick={() => navigate1(navigate)}
        className="w-full h-auto flex flex-col items-center p-6 bg-gradient-to-br rounded-lg from-gray-900 to-black border-gray-800 hover:border-gray-700 transition-all duration-300 border">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 text-center">{description}</p>
      </button>
    </motion.div>
  );
}
