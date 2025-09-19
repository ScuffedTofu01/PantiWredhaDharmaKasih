import React from 'react';
import { motion } from 'framer-motion';

const Moto: React.FC = () => {
  return (
    <motion.section
      id="moto"
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/picture2.jpg")',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.2 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.h2
        className="text-4xl font-heading text-white mb-6 relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      >
        Moto Kami
      </motion.h2>

      <motion.h1
        className="text-5xl font-heading text-white mb-8 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        "Kasih Kristus Untuk Semuanya"
      </motion.h1>
    </motion.section>
  );
};

export default Moto;