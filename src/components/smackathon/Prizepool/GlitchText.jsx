// components/GlitchText.js or GlitchText.jsx
import { motion } from 'framer-motion';

const GlitchText = ({ text, className }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Base text */}
      <motion.span
        initial={{ x: 0 }}
        animate={{
          x: [0, -1, 1, -2, 2, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop' }}
        className="relative z-10"
      >
        {text}
      </motion.span>

      {/* Blue offset */}
      <motion.span
        initial={{ x: 0 }}
        animate={{
          x: [-1, 1, -1],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
        className="absolute top-0 left-0 text-cyan-400 z-0 pointer-events-none"
      >
        {text}
      </motion.span>

      {/* Red offset */}
      <motion.span
        initial={{ x: 0 }}
        animate={{
          x: [1, -1, 2],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{ duration: 0.45, repeat: Infinity, repeatType: 'loop' }}
        className="absolute top-0 left-0 text-pink-500 z-0 pointer-events-none"
      >
        {text}
      </motion.span>
    </div>
  );
};

export default GlitchText;
