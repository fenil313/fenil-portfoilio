import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSection = ({ image }) => {
  const containerRef = useRef(null);
  
  // Track scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Trigger when container enters/leaves viewport
  });

  // Image comes from outside (right: 100% to 0)
  const xTranslate = useTransform(scrollYProgress, [0, 0.4], ["100%", "0%"]);
  // Image scale effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  // Text parallax effect
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <motion.div style={{ y: textY }} className="z-10 order-2 md:order-1">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black dark:text-white leading-tight"
          >
            MODERN <br /> <span className="text-indigo-600">AESTHETICS</span>
          </motion.h2>
          <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg max-w-md">
            This container tracks your scroll. The image slides in from the right 
            edge while the text floats upward at a different speed.
          </p>
        </motion.div>

        {/* Image Side (The one that comes from outside) */}
        <div className="relative order-1 md:order-2 h-[500px] w-full">
          <motion.div 
            style={{ x: xTranslate, scale }}
            className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src={image} 
              alt="Work" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ScrollSection;