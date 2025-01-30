import React from "react";
import { motion } from "framer-motion";

export const ChapterInfo = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
              The Mumbai's ACM Professional Chapter serves as a dynamic platform
              for computing professionals, academics, and students within the
              local community. As part of the renowned Association for Computing
              Machinery (ACM), we are committed to promoting knowledge exchange,
              professional development, and networking opportunities for our
              members.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              At the Mumbai's ACM Professional Chapter, we aim to create an
              inclusive environment where computing professionals can grow,
              learn, and collaborate. Through a wide array of activities and
              events, we seek to make a meaningful impact on the local computing
              community and support the growth and success of our members.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
