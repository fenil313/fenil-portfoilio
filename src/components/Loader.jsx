import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import myImage from "../assets/myimg.png"; 


const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // Slightly faster for better UX
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= 100) {
        start = 100;
        clearInterval(interval);
        setTimeout(() => setExit(true), 400);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1200);
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exit ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          // Added 'dark' logic colors: dark-900 (bg) and white (text)
          className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-[200]"
        >
          <div className="relative flex items-center justify-center">
            {/* Rotating Circular Text */}
            <motion.svg
              viewBox="0 0 300 300"
              className="w-56 h-56 sm:w-72 sm:h-72"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150,150 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                />
              </defs>
              <text fill="white" fontSize="12" letterSpacing="5" className="font-mono uppercase opacity-50">
                <textPath href="#circlePath">
                  ✦ FENIL PATEL ✦ PORTFOLIO ✦ DEVELOPER ✦ CREATOR ✦
                </textPath>
              </text>
            </motion.svg>

            {/* Center Image - Fixed path */}
            <motion.img
              src={myImage}
              alt="Fenil Patel"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-indigo-500 shadow-[0_0_50px_rgba(79,70,229,0.3)]"
            />
          </div>

          {/* Loading Percentage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex flex-col items-center"
          >
            <span className="text-6xl font-black text-white italic tracking-tighter">{count}%</span>
            <div className="mt-4 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-indigo-500"
                style={{ width: `${count}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Loader;