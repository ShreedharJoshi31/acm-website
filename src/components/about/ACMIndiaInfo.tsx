import React from 'react';
import { motion } from 'framer-motion';

export const ACMIndiaInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">ACM India Council</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
              The ACM India Council was created by ACM to recognize and support Indian ACM members and activities. 
              It is an effort of ACM, aimed at increasing the level and visibility of ACM activities across India.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              The ACM India Council activities, involving both academia and industry in computing, include research, 
              organization of high-quality computing conferences, advancing Computer Science education, and awards 
              to recognize achievement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
