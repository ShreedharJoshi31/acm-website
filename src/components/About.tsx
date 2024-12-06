import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To foster growth in computer science and technology through practical learning and innovation.',
  },
  {
    icon: Users,
    title: 'Our Vision',
    description: 'Creating a vibrant community of tech enthusiasts who drive positive change through technology.',
  },
  {
    icon: Lightbulb,
    title: 'Our Values',
    description: 'Innovation, collaboration, inclusivity, and continuous learning are at the heart of everything we do.',
  },
];

export const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-gray-600">
            We are a community of passionate technologists, innovators, and problem-solvers
            dedicated to advancing computing as a science and profession.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <item.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}