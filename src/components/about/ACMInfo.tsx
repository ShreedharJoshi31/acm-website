import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Award } from 'lucide-react';

const highlights = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'More than 100,000 members residing worldwide',
  },
  {
    icon: Users,
    title: 'Professional Network',
    description: 'Strong leadership and professional networking opportunities',
  },
  {
    icon: Award,
    title: 'Technical Excellence',
    description: 'Highest standards and recognition of technical excellence',
  },
];

export const ACMInfo = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What is ACM Professional Chapter?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12 text-justify">
            ACM brings together computing educators, researchers, and professionals to inspire dialogue, 
            share resources, and address the field's challenges. As the world's largest computing society, 
            ACM strengthens the profession's collective voice through strong leadership, promotion of the 
            highest standards, and recognition of technical excellence.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6"
              >
                <item.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}