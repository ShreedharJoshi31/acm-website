import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code2 } from "lucide-react";
import { CoreDomains } from "../components/CoreDomains";
import { Highlights } from "../components/Highlights";
import { WhyJoinUs } from "../components/WhyJoinUs";
import { Stats } from "../components/Stats";
import { AnimatedHeroBackground } from "../components/AnimatedHeroBackground";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <AnimatedHeroBackground />

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-semibold text-blue-500">
                  ACM Professional Chapter
                </span>
              </div> */}
              <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Mumbai's ACM Professional Chapter
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                A community of curious minds pushing the boundaries of computer
                science, where the minds Meet Technology for Groundbreaking
                Ideas
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/about");
                }}
                className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-blue-700 transition-all"
              >
                Know More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200"
                  alt="Tech collaboration"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full backdrop-blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <CoreDomains /> */}
      {/* <Highlights /> */}
      <WhyJoinUs />
      {/* <Stats /> */}
    </div>
  );
};
