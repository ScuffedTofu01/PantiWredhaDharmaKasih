import React from 'react';
import { motion } from 'framer-motion';


const Hero: React.FC = () => {
  return (
    <motion.section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
           'url("/picture.png")'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 bg-gradient-overlay flex items-center justify-center">
        <motion.div
          className="text-center text-white px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading mb-4 leading-tight">
            Panti Wredha <br /> Budi Dharma Kasih
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Pelayanan Kasih untuk Lanjut Usia di Kalimanah, Purbalingga
          </p>
          <motion.a
            href="#sejarah"
            className="btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Pelajari Lebih Lanjut
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;