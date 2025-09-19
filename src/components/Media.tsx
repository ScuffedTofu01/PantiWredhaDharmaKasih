import React from 'react';
import { motion } from 'framer-motion';

const Media: React.FC = () => {
  return (
    <section id="media" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-heading text-center mb-12 text-charcoal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Aktivitas Kami
        </motion.h2>
        <div className="section-divider mx-auto mb-12 w-16 h-1 bg-white rounded"></div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Local Video */}
          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden shadow-soft"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <video controls className="w-full h-full object-cover">
              <source src="/video-panti.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* YouTube Video */}
          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden shadow-soft"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/FhXcO8ukaGQ?autoplay=0&rel=0"
              title="Panti Wredha Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-heading mb-6 text-charcoal">Ikuti Kami di Instagram</h3>
          <div className="max-w-lg mx-auto">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.instagram.com/p/DOxK7Mtj6n6/embed" 
              title="Instagram Post"
              allowTransparency
              allowFullScreen
            ></iframe>
          </div>
          <motion.a
            href="https://www.instagram.com/pantiwredabudidharmakasih?igsh=cmN6bHFmOXlyMms5"
            className="btn-primary inline-flex items-center space-x-2 mt-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.614.073-3.033.414-4.192 1.573-1.159 1.159-1.5 2.578-1.573 4.192-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.614.414 3.033 1.573 4.192 1.159 1.159 2.578 1.5 4.192 1.573 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.614-.073 3.033-.414 4.192-1.573 1.159-1.159 1.5-2.578 1.573-4.192.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.614-.414-3.033-1.573-4.192-1.159-1.159-2.578-1.5-4.192-1.573-1.28-.058-1.688-.072-4.947-.072z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
            <span>Lihat Instagram Kami</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Media;