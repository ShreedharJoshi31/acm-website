import { motion } from "framer-motion";
import TimelineJoinUs from "../components/TimelineJoinUs"; // Adjusted relative import

export const JoinUs = () => {
  return (
    <div
      className="pt-16"
      style={{
        backgroundImage: `url(/backgroundAbout.bmp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="relative py-2 bg-transparent">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-900 ml-20 mr-20">
            Join Us
          </h1>
          <h1 className="text-3xl md:text-xl font-semibold mb-6 text-blue-900 ml-20 mr-20">
            Become a Member and Connect with the Mumbai ACM Chapter
          </h1>
        </motion.div>
      </section>

      {/* Render Timeline in this section */}
      <section className="py-20">
        <TimelineJoinUs />
      </section>
    </div>
  );
};

export default JoinUs;