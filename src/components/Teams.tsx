import React from 'react';
import { useInView } from '../hooks/useInView';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chapter President',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    funFact: 'Completed 100 Days of Code challenge twice',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300',
    funFact: 'Built a robot that makes coffee',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Events Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
    funFact: 'Organized 20+ tech conferences',
  },
  {
    name: 'David Kim',
    role: 'Development Head',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300',
    funFact: 'Published 3 mobile apps',
  },
];

export const Teams = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`transform transition-all duration-700 ${
                isInView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative">
                <div className="aspect-square overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end p-6">
                  <p className="text-white text-sm">Fun fact: {member.funFact}</p>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}