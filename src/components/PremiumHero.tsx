import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import '../styles/PHero.css';


export default function PortfolioClone() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // PHASE 1: TEXT 1 exits (0 → 0.25)
  const text1Y = useTransform(scrollYProgress, [0, 0.25], ["0%", "-160%"]);
  const text1Opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  // BACKGROUND BLUR (subtle, mid section)
  const backgroundBlurOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    [0, 1]
  );
  const backgroundBlurAmount = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    ["0px", "10px"]
  );

  // PHASE 2: TEXT 2 enters (0.35 → 0.8)
  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.8], [0, 1]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.8], ["30px", "0px"]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:wght@400;600&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* MAIN SCROLL SECTION (reduced height) */}
      
      <div
        ref={containerRef}
        className="relative h-[110vh] md:h-[105vh] w-full"
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          {/* BACKGROUND BLUR LAYER */}
          <motion.div
            style={{
              opacity: backgroundBlurOpacity,
              backdropFilter: backgroundBlurAmount,
            }}
            className="absolute inset-0 z-0 bg-transparent"
          />

          {/* TEXT 1: STOP PLAYING SMALL. */}
          <motion.h1
            style={{ y: text1Y, opacity: text1Opacity }}
            className="absolute bottom-24 md:bottom-28 z-10 text-white text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter font-inter text-center w-full px-4"
          >
            WELCOME TO,
          </motion.h1>

          {/* IMAGE – LOCKED IN CENTER */}
          <div className="relative z-20 flex items-center justify-center pointer-events-none">
            <div className="w-[280px] h-[380px] md:w-[380px] md:h-[520px] grayscale">
              <img
                src="https://i.ibb.co/6JfTZLjz/IMG-0216.jpg?q=80&w=1000&auto=format&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 mix-blend-multiply"></div>
            </div>
          </div>

          {/* TEXT 2: I START PLAYING SMART. */}
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none mix-blend-screen">
            <motion.div
              style={{ opacity: text2Opacity, y: text2Y }}
              className="text-center mt-8"
            >
            
              <span className="font-playfair text-6xl md:text-9xl block leading-none mb-2 text-white">
                MY
              </span>
              <span className="font-playfair text-4xl md:text-7xl block text-gray-200">
                PORTFOLIO.
              </span>
            </motion.div>
          </div>
        </div>
      </div>


    </div>
  );
}
