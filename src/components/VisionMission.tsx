import React from 'react';
import { motion } from 'framer-motion';

const VisionMission: React.FC = () => {
  return (
    <section
      id="visi-misi"
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/picture4.jpg")', // Replace with your image path
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-heading text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Visi & Misi
        </motion.h2>
        <div className="section-divider mx-auto mb-12 w-16 h-1 bg-accent rounded"></div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Visi Section */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-heading text-charcoal">Visi</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Menjadi suatu yayasan kristen yang memberikan pelayanan kasih kepada sesama manusia, terutama kepada kaum Lanjut Usia agar mereka dapat mencapai kehidupan yang lebih berkualitas"
            </p>
          </motion.div>

          {/* Misi Section */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-heading text-charcoal">Misi</h3>
            </div>
            <ol className="list-decimal pl-5 text-lg text-gray-700 leading-relaxed">
              <li>Memberikan pelayanan panti kepada Lanjut Usia agar mereka dapat menikmati hidup di usia senja dengan bahagia</li>
              <li>Memberikan pelayanan kesehatan, pelayanan rohani, pelayanan rekreasi kepada penghuni panti agar menikmati hidup sehat sesuai dengan usianya</li>
              <li>Memberikan pelayanan-pelayanan lain yang menunjukan pelayanan kasih Kristus, yang tidak bertentangan dengan peraturan perundang-undangan yang berlaku.</li>
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;