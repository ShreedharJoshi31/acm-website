import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { WhyJoinUs } from "../components/WhyJoinUs";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar"; // Importing the Navbar component

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(/backgroundAbout.bmp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar /> {/* Add the Navbar component here */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Removed the AnimatedHeroBackground to prevent any overlay effect */}

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Mumbai ACM Professional Chapter
              </h1>
              <p className="text-xl md:text-2xl text-blue-900 mb-8 text-justify">
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
                  src="/homeimage.bmp"
                  alt="Tech collaboration"
                  className="w-full h-auto"
                />
                {/* Removed gradient overlay to ensure the original image color is visible */}
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
