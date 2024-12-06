import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Hackathon 2024',
    date: '2024-04-15',
    time: '09:00 AM',
    location: 'Main Campus Hall',
    description: '24-hour coding challenge with amazing prizes',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800',
  },
  {
    title: 'AI Workshop Series',
    date: '2024-04-20',
    time: '02:00 PM',
    location: 'Tech Lab 101',
    description: 'Hands-on workshop on machine learning basics',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800',
  },
  {
    title: 'Tech Talk: Future of Cloud',
    date: '2024-04-25',
    time: '04:00 PM',
    location: 'Virtual Event',
    description: 'Industry experts discuss cloud computing trends',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800',
  },
];

export const Events = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}