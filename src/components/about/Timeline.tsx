import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2020',
    title: 'Chapter Founded',
    description: 'Started with 20 passionate members committed to tech excellence.',
  },
  {
    year: '2021',
    title: 'First Hackathon',
    description: 'Organized our first major event with 200+ participants.',
  },
  {
    year: '2023',
    title: 'National Recognition',
    description: 'Awarded as the Best Student Chapter in the region.',
  },
];

export const Timeline = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-4"
              >
                <div className="w-24 shrink-0 text-blue-500 font-bold">{event.year}</div>
                <div className="flex-1 bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}