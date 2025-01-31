import React from "react";
import { Network, BookOpen, Users2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Network,
    title: "Networking",
    description: "Connect with industry professionals and like-minded peers",
    bgColor: "bg-gray-800", // Changed to gray-800
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Access exclusive workshops, tutorials, and learning resources",
    bgColor: "bg-gray-800", // Changed to gray-800
  },
  {
    icon: Users2,
    title: "Mentorship",
    description: "Get guidance from experienced developers and tech leaders",
    bgColor: "bg-gray-800", // Changed to gray-800
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Develop leadership skills and advance your career",
    bgColor: "bg-gray-800", // Changed to gray-800
  },
];

export const WhyJoinUs = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 p-2">
            Why Join Us?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <div
                className={`absolute inset-0 ${benefit.bgColor} group-hover:opacity-90`}
              >
                {/* Background color will now cover the whole area */}
              </div>
              <div className="relative p-6 text-white">
                <benefit.icon className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
