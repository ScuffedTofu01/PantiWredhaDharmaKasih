import React from 'react';
import { motion } from 'framer-motion';

const History: React.FC = () => {
  const timelineItems = [
    {
      year: '1972',
      desc: 'Bapak Lie Hok Tjan (Budi Soedharma) mencetuskan ide pembentukan panti wredha dan bersedia menghibahkan sebagian tanah miliknya di Kalimanah, Purbalingga.',
    },
    {
      year: '02 Desember 1988',
      desc: 'Dibentuklah Yayasan Pelayanan Kristen "Budi Dharma Kasih". Nama Budi Dharma dipilih sebagai penghormatan terhadap beliau.',
    },
    {
      year: '24 Desember 1988',
      desc: 'Ibu Lie Hok Tjan merealisasikan keinginan dengan menghibahkan tanah untuk panti.',
    },
    {
      year: 'Pembangunan Fisik',
      desc: 'Dimulai Februari 1989, pelaksana Bapak Ir. Chris, dana dari donatur, kegiatan catering, dan pinjaman. Unit pertama selesai 23 September 1989.',
    },
  ];

  return (
    <section id="sejarah" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-heading text-center mb-12 text-charcoal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sejarah Yayasan
        </motion.h2>
        <div className="section-divider" />
        <div className="space-y-8 max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-soft flex items-start space-x-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="bg-secondary text-white px-4 py-2 rounded font-heading text-lg">{item.year}</div>
              <p className="text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-center text-lg">
          Lokasi: Jl. May. Jend. Sungkono No.510, Kalimanah, Purbalingga. <br /> Di bawah naungan Yayasan "Budi Dharma Kasih".
        </p>
      </div>
    </section>
  );
};

export default History;