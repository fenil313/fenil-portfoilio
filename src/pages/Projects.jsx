import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, ArrowUp, ArrowDown, Layers } from 'lucide-react';

import quizImg from '../assets/quiz.jpg';

gsap.registerPlugin(ScrollTrigger);

// CORRECTED ARRAY: Added missing comma after the second object
const projects = [
  { 
    id: 1, 
    title: "Quiz Application", 
    image: quizImg, 
    desc: "A high-performance quiz engine with fluid animations and real-time state management.", 
    github: "https://github.com/fenil313/Quiz-app", 
    demo: "https://quiz-app-one-mu-17.vercel.app/" 
  },
  { 
    id: 2, 
    title: "Neural Vision", 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070", 
    desc: "Data visualization mapping complex neural networks in a 3D interface.", 
    github: "https://github.com", 
    demo: "https://demo.com" 
  },
  { 
    id: 3, 
    title: "E-Commerce Dashboard", 
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070", 
    desc: "A robust admin panel for managing inventory, sales, and user analytics.", 
    github: "https://github.com", 
    demo: "https://demo.com" 
  },
  { 
    id: 4, 
    title: "Task Orchestrator", 
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2070", 
    desc: "Streamlined workflow management system designed for distributed teams.", 
    github: "https://github.com", 
    demo: "https://demo.com" 
  }
];

const Projects = () => {
  const container = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(".card-anim", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2, // Faster reveal for more items
      ease: "power3.out",
      scrollTrigger: { trigger: container.current, start: "top 70%" }
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-[#050505] min-h-screen text-white py-20 px-6 md:px-20">
      
      <div className="flex justify-between items-end mb-20">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter">PROJECTS.</h1>
        <Layers className="text-white/20" size={48} />
      </div>

      {/* GRID AUTO-FILLS BASED ON ARRAY SIZE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((p) => (
          <div key={p.id} className="card-anim bg-[#0a0a0a] rounded-[2rem] p-6 border border-white/10 hover:border-blue-500 transition-all duration-500">
            <div className="overflow-hidden rounded-[1.5rem] mb-8">
              <img src={p.image} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" alt={p.title} />
            </div>
            
            <h2 className="text-4xl font-bold mb-4">{p.title}</h2>
            <p className="text-white/50 mb-8 leading-relaxed">{p.desc}</p>
            
            <div className="flex gap-4">
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase hover:bg-blue-500 hover:text-white transition-all">
                Live Demo <ExternalLink size={14} />
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-white/10 px-8 py-4 rounded-full text-xs font-bold uppercase hover:bg-white/10 transition-all">
                <Github size={14} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-3 z-50">
        <AnimatePresence>
          {showScroll && (
            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 shadow-lg">
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
        <button onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })} className="p-4 bg-blue-600 rounded-full shadow-lg hover:bg-blue-500">
          <ArrowDown size={20} />
        </button>
      </div>
    </main>
  );
};

export default Projects;