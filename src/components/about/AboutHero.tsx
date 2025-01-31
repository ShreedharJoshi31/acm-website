import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="relative py-1 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-2">
            <img
              src="/ACM-logo.png"
              className="w-52 h-52 md:w-60 md:h-60 object-contain"
              alt="ACM Logo"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Mumbai ACM Professional Chapter
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold mb-3 text-blue-900">
            Collaborate to Elevate
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
