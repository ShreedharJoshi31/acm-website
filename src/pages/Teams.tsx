import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Twitter } from "lucide-react";
import { useInView } from "../hooks/useInView";

const teamMembers = [
  {
    name: "Dr. Bhavesh Patel",
    role: "Chair",
    image: "/bhavesh_patel.png",
    designation: "Principal & Professor ,SAKEC",
  },
  {
    name: "Ms.Swati Nadkarni",
    role: "Chapter PresiVice Chairdent",
    image: "/swati_nadkarni.png",
    designation: "Associate Professor,SAKEC",
  },
  {
    name: "Dr.Shashikant Patil",
    role: "Secretary",
    image: "/shashikant_patil.png",
    designation:
      "Senior Director and Professor, Atlas SkillTech University Mumbai",
  },
  {
    name: "Ms.Pramila Shinde",
    role: "Treasurer",
    image: "/pramila_shinde.png",
    designation: "Assistant Professor,SAKEC",
  },
  {
    name: "Dr.Sunil Kumar Kopparapu",
    role: "Industry Connect Head",
    image: "sunil_kumar.png",
    designation: "Principal Scientist, TCS Research",
  },
  {
    name: "Ms.Manya Gidwani",
    role: "Webmaster",
    image: "/manya_gidwani.png",
    designation: "Assistant Professor,SAKEC",
  },
  {
    name: "Dr.Padmaja Joshi",
    role: "Event Chair",
    image: "/padmaja_joshi.png",
    designation: "Scientist G and Head,C-DAC",
  },
  {
    name: "Dr.Smita Bansod",
    role: "Membership Chair",
    image: "/smita_bansod.png",
    designation: "Assistant Professor,SAKEC",
  },
  {
    name: "Anita Devasthali",
    role: "Technical Head",
    image: "/anita_devasthali.png",
    designation: "Business Analyst (C2),Tata Consultancy Services",
  },
  {
    name: "Mr. Dhwaniket Kamble",
    role: "Graphics Designer",
    image: "/dhwaniket_kamble.png",
    designation: "Assistant Professor,RAIT",
  },
  {
    name: "Mr.Vaibhav Prakash Vasani",
    role: "Public relation head",
    image: "/vaibhav_prakash.png",
    designation: "Assistant Professor,Somaiya Vidyavihar University",
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <h3 className="text-blue-500 mb-2">{member.designation}</h3>
                  <p className="text-blue-500 mb-3 font-semibold bg-blue-500/10 inline-block px-2 py-1 rounded">
                    {member.role}
                  </p>
                  {/* <div className="flex gap-4">
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
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
