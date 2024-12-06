import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Code2 } from "lucide-react";
import { EventModal } from "../components/EventModal";

const events = [
  {
    title: "Hackathon 2024",
    date: "2024-04-15",
    time: "09:00 AM",
    location: "Main Campus Hall",
    description:
      "Join us for an exciting 24-hour coding challenge where you'll work with talented developers to build innovative solutions. Network with industry professionals, win amazing prizes, and showcase your skills!",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800",
    category: "Competition",
  },
  {
    title: "AI Workshop Series",
    date: "2024-04-20",
    time: "02:00 PM",
    location: "Tech Lab 101",
    description:
      "Dive deep into the world of artificial intelligence with our comprehensive workshop series. Learn about machine learning algorithms, neural networks, and practical applications of AI in today's technology landscape.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    category: "Workshop",
  },
  {
    title: "Tech Talk: Future of Cloud",
    date: "2024-04-25",
    time: "04:00 PM",
    location: "Virtual Event",
    description:
      "Join leading cloud computing experts as they discuss emerging trends, best practices, and the future of cloud technology. Perfect for both beginners and experienced professionals looking to stay ahead in the field.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
    category: "Talk",
  },
  {
    title: "Code Sprint Challenge",
    date: "2024-05-01",
    time: "10:00 AM",
    location: "Computer Lab A",
    description:
      "Test your programming skills in this fast-paced coding competition. Solve algorithmic challenges, optimize your code, and compete with fellow developers. Suitable for all skill levels with different difficulty categories.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",
    category: "Competition",
  },
];

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="pt-16">
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Code2 className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-300">
              Join us for exciting events, workshops, and competitions designed
              to enhance your skills and expand your network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-gray-400">
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
