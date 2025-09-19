import React from 'react';
import { motion } from 'framer-motion';

const VisionMission: React.FC = () => {
  return (
    <section id="visi-misi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-heading text-center mb-12 text-charcoal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Visi, Misi, & Moto
        </motion.h2>
        <div className="section-divider" />
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-accent p-8 rounded-lg shadow-soft"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading mb-4 text-charcoal">Visi</h3>
            <p>
              "Menjadi suatu yayasan kristen yang memberikan pelayanan kasih kepada sesama manusia, terutama kepada kaum Lanjut Usia agar mereka dapat mencapai kehidupan yang lebih berkualitas"
            </p>
          </motion.div>
          <motion.div
            className="bg-accent p-8 rounded-lg shadow-soft"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading mb-4 text-charcoal">Misi</h3>
            <ol className="list-decimal pl-5 text-lg">
              <li>Memberikan pelayanan panti kepada Lanjut Usia agar mereka dapat menikmati hidup di usia senja dengan bahagia</li>
              <li>Memberikan pelayanan kesehatan, pelayanan rohani, pelayanan rekreasi kepada penghuni panti agar menikmati hidup sehat sesuai dengan usianya</li>
              <li>Memberikan pelayanan-pelayanan lain yang menunjukan pelayanan kasih Kristus, yang tidak bertentangan dengan peraturan perundang-undangan yang berlaku.</li>
            </ol>
          </motion.div>
          <motion.div
            className="bg-accent p-8 rounded-lg shadow-soft"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading mb-4 text-charcoal">Moto</h3>
            <p>"Kasih Kristus Untuk Semuanya"</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;