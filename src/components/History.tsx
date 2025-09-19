import React from 'react';
import { motion } from 'framer-motion';

const History: React.FC = () => {
  const timelineItems = [
    {
      year: '1972',
      title: 'Awal Ide Pembentukan',
      desc: 'Bapak Lie Hok Tjan (Budi Soedharma) mencetuskan ide pembentukan panti wredha dan bersedia menghibahkan sebagian tanah miliknya di Kalimanah, Purbalingga.',
    },
    {
      year: '02 Desember 1988',
      title: 'Pembentukan Yayasan',
      desc: 'Dibentuklah Yayasan Pelayanan Kristen "Budi Dharma Kasih". Nama Budi Dharma dipilih sebagai penghormatan terhadap beliau.',
    },
    {
      year: '24 Desember 1988',
      title: 'Realisasi Hibah Tanah',
      desc: 'Ibu Lie Hok Tjan merealisasikan keinginan dengan menghibahkan tanah untuk panti.',
    },
    {
      year: 'Februari 1989',
      title: 'Pembangunan Fisik Panti',
      desc: 'Dimulai Februari 1989, pelaksana Bapak Ir. Chris, dana dari donatur, kegiatan catering 3 ibu, dan pinjaman catering 3 ibu. Unit pertama selesai 23 September 1989.',
    },
  ];

  return (
    <section
      id="sejarah"
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/picture3.jpg")',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.h2
          className="text-4xl font-heading text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sejarah Yayasan
        </motion.h2>
        <div className="mx-auto mb-12 w-20 h-1 bg-accent rounded"></div>

        {/* Timeline */}
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.year}</h3>
                <h4 className="text-lg font-medium text-gray-700 mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-lg text-white">
          Lokasi: Jl. May. Jend. Sungkono No.510, Kalimanah, Purbalingga. <br /> Di bawah naungan Yayasan "Budi Dharma Kasih".
        </p>
      </div>
    </section>
  );
};

export default History;