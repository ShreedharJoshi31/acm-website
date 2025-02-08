import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { type: "image", src: "/Message.png", alt: "ACM Message" },
  { type: "image", src: "/homeimage.bmp", alt: "Tech collaboration" },
];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [autoPlay, setAutoPlay] = useState(true);
  const slideDuration = 20000; // 20 seconds

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), slideDuration);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[500px] flex justify-center items-center">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-10 bg-transparent p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-10 bg-transparent p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Content with Fixed Direction */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[currentSlide].src}
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            initial={{ x: direction * 1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -1000, opacity: 1 }} // Ensures exit follows swipe direction
            transition={{ duration: 0.3, ease: "linear" }}
            className="absolute w-full h-full object-cover rounded-2xl"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};
