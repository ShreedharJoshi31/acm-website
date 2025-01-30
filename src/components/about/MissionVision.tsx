import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: 'Our Mission',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-gray-300 text-justify">
        <li>To nurture innovation and foster collaboration across computing disciplines.</li>
        <li>To advance interdisciplinary computing by integrating diverse domains.</li>
        <li>To promote excellence and sustainable technological solutions for the future.</li>
      </ul>
    ),
  },
  {
    icon: Rocket,
    title: 'Our Vision',
    description:(
      <ul className="list-disc pl-5 space-y-2 text-gray-300 text-justify">
        <li>To nurture the ecosystem that fosters innovation, collaboration, excellence, and social responsibility in computing.</li>
      </ul>
    ),
  },
];

export const MissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <item.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <div className="text-gray-300">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
