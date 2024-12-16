import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export const AboutHero = () => {
  return (
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
            SAKEC ACM Professional Chapter
          </h1>
          <p className="text-xl text-gray-300">
            A vibrant hub for computing professionals, academics, and students,
            fostering collaboration and growth within the local community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
