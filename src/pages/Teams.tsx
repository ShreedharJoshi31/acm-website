import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Twitter } from "lucide-react";
import { useInView } from "../hooks/useInView";

const teamMembers = [
  {
    name: "Shreedhar Joshi",
    role: "Chapter President",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800",
    bio: "Leading with innovation and passion for technology",
    funFact: "Completed 100 Days of Code challenge twice",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Shreedhar Joshi",
    role: "Chapter President",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800",
    bio: "Leading with innovation and passion for technology",
    funFact: "Completed 100 Days of Code challenge twice",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Shreedhar Joshi",
    role: "Chapter President",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800",
    bio: "Leading with innovation and passion for technology",
    funFact: "Completed 100 Days of Code challenge twice",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Shreedhar Joshi",
    role: "Chapter President",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
    bio: "Leading with innovation and passion for technology",
    funFact: "Completed 100 Days of Code challenge twice",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Shreedhar Joshi",
    role: "Chapter President",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
    bio: "Leading with innovation and passion for technology",
    funFact: "Completed 100 Days of Code challenge twice",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Shreedhar Joshi",
    role: "Chapter President",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
    bio: "Leading with innovation and passion for technology",
    funFact: "Completed 100 Days of Code challenge twice",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export const Teams = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

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
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300">
              Get to know the passionate individuals driving innovation and
              excellence in our chapter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden group bg-opacity-40 shadow-custom-inset"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <p className="text-white mb-4">{member.bio}</p>
                    <p className="text-blue-400">Fun fact: {member.funFact}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-500 mb-4">{member.role}</p>
                  <div className="flex gap-4">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
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
