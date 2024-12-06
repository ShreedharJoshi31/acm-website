import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Lightbulb,
  Code2,
  Rocket,
  Globe,
  BookOpen,
} from "lucide-react";

const missions = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To foster growth in computer science and technology through practical learning and innovation.",
  },
  {
    icon: Users,
    title: "Our Vision",
    description:
      "Creating a vibrant community of tech enthusiasts who drive positive change through technology.",
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    description:
      "Innovation, collaboration, inclusivity, and continuous learning are at the heart of everything we do.",
  },
];

const acmInfo = [
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Part of the world's largest computing society with over 100,000 members worldwide.",
  },
  {
    icon: BookOpen,
    title: "Digital Library",
    description:
      "Access to the ACM Digital Library with millions of research papers and publications.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description:
      "Professional development through conferences, workshops, and networking events.",
  },
];

const objectives = [
  {
    title: "Technical Excellence",
    description:
      "Fostering technical skills through hands-on projects and workshops.",
  },
  {
    title: "Research & Innovation",
    description:
      "Supporting research initiatives and innovative projects in computing.",
  },
  {
    title: "Industry Connect",
    description:
      "Building bridges between academia and industry through partnerships.",
  },
  {
    title: "Community Building",
    description:
      "Creating an inclusive environment for learning and collaboration.",
  },
];

export const About = () => {
  return (
    <div className="pt-16">
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
              About Our Chapter
            </h1>
            <p className="text-xl text-gray-300">
              We are a community of passionate technologists, innovators, and
              problem-solvers dedicated to advancing computing as a science and
              profession.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

      {/* About ACM */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why ACM?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {acmInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-4 p-6 bg-gray-800 rounded-xl"
              >
                <item.icon className="w-8 h-8 text-blue-500 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Objectives
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {objectives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4"
              >
                <div className="w-24 shrink-0 text-blue-500 font-bold">
                  2020
                </div>
                <div className="flex-1 bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">
                    Chapter Founded
                  </h3>
                  <p className="text-gray-300">
                    Started with 20 passionate members committed to tech
                    excellence.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="w-24 shrink-0 text-blue-500 font-bold">
                  2021
                </div>
                <div className="flex-1 bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">
                    First Hackathon
                  </h3>
                  <p className="text-gray-300">
                    Organized our first major event with 200+ participants.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4"
              >
                <div className="w-24 shrink-0 text-blue-500 font-bold">
                  2023
                </div>
                <div className="flex-1 bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">
                    National Recognition
                  </h3>
                  <p className="text-gray-300">
                    Awarded as the Best Student Chapter in the region.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
