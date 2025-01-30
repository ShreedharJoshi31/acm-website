import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Bhavesh Patel",
    role: "Chair",
    image: "/bhavesh_patel.png",
    designation: "Principal & Professor\nSAKEC",
  },
  {
    name: "Ms. Swati Nadkarni",
    role: "Chapter President",
    image: "/swati_nadkarni.png",
    designation: "Associate Professor\nSAKEC",
  },
  {
    name: "Dr. Shashikant Patil",
    role: "Secretary",
    image: "/shashikant-patil.bmp",
    designation: "Senior Director\nAtlas SkillTech University",
  },
  {
    name: "Ms. Pramila Shinde",
    role: "Treasurer",
    image: "/pramila-shinde.jpg",
    designation: "Assistant Professor\nSAKEC",
  },
  {
    name: "Dr. Sunil Kumar Kopparapu",
    role: "Industry Connect Head",
    image: "sunil_kumar.png",
    designation: "Principal Scientist\nTCS Research",
  },
  {
    name: "Ms. Manya Gidwani",
    role: "Webmaster",
    image: "/manya_gidwani.png",
    designation: "Assistant Professor\nSAKEC",
  },
  {
    name: "Dr. Padmaja Joshi",
    role: "Event Chair",
    image: "/padmaja_joshi.png",
    designation: "Scientist G, Head\nC-DAC",
  },
  {
    name: "Dr. Jalpa Mehta",
    role: "Membership Chair",
    image: "/jalphaMehta.bmp",
    designation: "Assistant Professor\nSAKEC",
  },
  {
    name: "Anita Devasthali",
    role: "Technical Head",
    image: "/anita_devasthali.png",
    designation: "Business Analyst\nTCS",
  },
  {
    name: "Mr. Dhwaniket Kamble",
    role: "Graphics Designer",
    image: "/dhwaniket_kamble.png",
    designation: "Assistant Professor\nRAIT",
  },
  {
    name: "Mr. Vaibhav Prakash Vasani",
    role: "Public Relations Head",
    image: "/vaibhav_prakash.png",
    designation: "Assistant Professor\nKJSIT",
  },
  {
    name: "Mr. Manoj Dhande",
    role: "Position",
    image: "/manoj-dhande.jpg",
    designation: "Assistant Professor\nSAKEC",
  },
];

export const Teams = () => {
  return (
    <div className="pt-16">
      <section
        className="relative py-2 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
        style={{
          backgroundImage: `url(/backgroundAbout.bmp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-4 text-center"
        >
          <div className="flex justify-center mb-2">
            <img
              src="/ACM-logo.png"
              className="w-52 h-52 md:w-60 md:h-60 object-contain"
              alt="ACM Logo"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Meet Our Team
          </h1>
          <p className="text-xl text-blue-900 font-semibold">
            Get to know the passionate individuals driving innovation and excellence in our chapter.
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-gray-800 rounded-xl overflow-hidden group shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col items-center text-center h-28 justify-between">
                  <h3 className="text-lg font-semibold text-white truncate w-full">{member.name}</h3>
                  <p className="text-xs text-white whitespace-pre-line w-full">{member.designation}</p>
                  <p className="text-xs text-white font-semibold bg-blue-500/20 inline-block px-3 py-1 rounded">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
