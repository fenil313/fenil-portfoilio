import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      // Small dot follows mouse exactly
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      // Outer ring follows with a slight delay (smooth effect)
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-500 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
      {/* Outer Ring */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-indigo-500/50 rounded-full pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
    </>
  );
};

export default CustomCursor;