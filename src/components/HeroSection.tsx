import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white text-black flex flex-col">
      {/* Top Bar */}
      

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-24">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-body mb-8"
        >
          ( 02 )
        </motion.div>

        {/* Hero Heading */}
        <div className="mb-auto">
          <motion.h1
            className="font-display text-[12vw] md:text-[14vw] lg:text-[16vw] leading-[0.85] tracking-tight uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              WHEN SUCCESS
            </motion.span>
            <motion.span
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              STARTS TO FEEL TOO
            </motion.span>
            <motion.span
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              SMALL
            </motion.span>
          </motion.h1>
        </div>

        {/* Supporting Copy */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 max-w-5xl mx-auto my-16 md:my-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="font-body font-light text-sm md:text-base leading-relaxed">
            You've built an extraordinary career and achieved what once seemed out of reach.
          </p>
          <p className="font-body font-light text-sm md:text-base leading-relaxed">
            But lately, the drive that once felt electric has turned into something else — a quiet restlessness you can't quite name. It's not about working harder.
          </p>
        </motion.div>

        {/* Overlay Tagline */}
        <motion.div
          className="absolute bottom-32 left-0 right-0 text-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          
        </motion.div>

        {/* Right Side Navigation and CTA */}
        <motion.div
          className="absolute bottom-12 right-8 md:right-12 lg:right-16 flex flex-col items-end gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
         
          
        
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
