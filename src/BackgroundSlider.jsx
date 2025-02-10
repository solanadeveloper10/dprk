import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/bg1.png",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg4.jpg",
];

export default function BackgroundSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      {/* Background Images */}
      <div className="slider-background">
        <AnimatePresence>
          <motion.div
            key={index}
            className="slider-image"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="slider-content">
        <h1>조선민주주의인민공화국 - 강성대국</h1>
      </div>

      {/* Navigation Buttons */}
      <button className="slider-button left" onClick={prevSlide}>◀</button>
      <button className="slider-button right" onClick={nextSlide}>▶</button>
    </div>
  );
}
