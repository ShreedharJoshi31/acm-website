import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { EventModal } from "../components/EventModal";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  link?: string;
  backgroundImage?: string;
}

const events: Event[] = [
  {
    title: "Mumbai ACM Professional Chapter Inauguration",
    date: "2025-02-01",
    time: "10:00 AM",
    location: "Shah & Anchor Kutchhi Engineering College, Mumbai",
    description:
      "The Mumbai ACM Professional Chapter was officially inaugurated on February 1, 2025, featuring talks by industry leaders like Dr. M. Sashikumar and Mr. Yati Gharat.",
    image: '/inaug_event.jpg',
    category: "Inauguration",
    link: "https://www.linkedin.com/posts/acm-mumbaichapter_acm-acmindia-mumbaiacm-activity-7293174346976575489-R2NB/?utm_source=share&utm_medium=member_ios&rcm=ACoAAD_mMwwBoMriOs8ZEW88uu-2YJ3Qwd470xU",
    backgroundImage: "/inaug_event.jpg",
  },
  
];

const getFilteredEvents = (tab: string) => {
  const today = new Date().toISOString().split("T")[0];
  if (tab === "Past") return events.filter((event) => event.date < today);
  if (tab === "Ongoing") return events.filter((event) => event.date === today);
  return events.filter((event) => event.date > today);
};

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div
      style={{
        backgroundImage: `url('/backgroundAbout.bmp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="pt-16"
    >
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* Hero Section */}
      <section className="relative bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <img src="/ACM-logo.png" className="w-52 h-52 md:w-60 md:h-60 object-contain mx-auto mb-2" alt="ACM Logo" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">{activeTab} Events</h1>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex justify-center gap-4 my-6">
        {["Past", "Ongoing", "Upcoming"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg text-lg font-semibold ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-blue-900"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredEvents(activeTab).map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div
                  className="relative h-80 rounded-xl overflow-hidden"
                  style={
                    event.backgroundImage
                      ? { backgroundImage: `url(${event.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
                      : {}
                  }
                >
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
                    <h3 className="text-xl font-semibold mb-4 text-white">{event.title}</h3>
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
                    {/* Know More Button */}
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-blue-300 hover:text-blue-500 transition"
                      >
                        Know More <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    )}
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
