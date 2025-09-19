import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 bg-gradient-to-r from-primary to-blue-600 text-white p-4 shadow-soft z-20"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-heading">Panti Wredha Budi Dharma Kasih</h1>
        <ul className="flex space-x-6">
          {['Home', 'Sejarah', 'Visi & Misi', 'Aktivitas', 'Kontak'].map((item, index) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: '#D4A017' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href={`#${item.toLowerCase().replace(' & ', '-')}`} className="text-lg hover:underline">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;