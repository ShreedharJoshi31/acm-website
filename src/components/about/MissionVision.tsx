import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To build a thriving community of computing enthusiasts dedicated to collaboration, learning, and innovation across diverse areas of computer science and related fields.',
  },
  {
    icon: Users,
    title: 'Our Vision',
    description: 'Creating an inclusive environment where computing professionals can grow, learn, and collaborate while making a meaningful impact on the local computing community.',
  },
  {
    icon: Lightbulb,
    title: 'Our Values',
    description: 'We strive to enhance the skills and expertise of our members, foster research and technological advancements, and contribute positively to the local computing ecosystem.',
  },
];

export const MissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
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
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}