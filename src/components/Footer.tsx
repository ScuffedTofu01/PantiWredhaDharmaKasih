import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      id="kontak"
      className="bg-gradient-to-r from-primary to-blue-600 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-heading mb-4">Panti Wredha Budi Dharma Kasih</h3>
        <p>Alamat: Jl. May. Jend. Sungkono No.510, Kalimanah, Purbalingga</p>
        <p>Yayasan Budi Dharma Kasih</p>
        <div className="section-divider mt-6" />
        <p>&copy; 2025 Panti Wredha Budi Dharma Kasih. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;