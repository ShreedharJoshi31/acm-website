import React from 'react';
import { Brain, Globe, Shield, Database, Code, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const domains = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Exploring the frontiers of machine learning and AI applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building modern web applications with cutting-edge technologies.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protecting digital assets and ensuring secure systems.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800',
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Unlocking insights through data analysis and visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
  },
  {
    icon: Code,
    title: 'Competitive Programming',
    description: 'Honing problem-solving skills through coding challenges.',
    image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=800',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Leveraging cloud platforms for scalable solutions.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800',
  },
];

export const CoreDomains = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Focus Areas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the diverse domains where we excel and innovate
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative p-8 backdrop-blur-sm rounded-xl border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <domain.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{domain.title}</h3>
                    <p className="text-gray-300">{domain.description}</p>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-lg">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}