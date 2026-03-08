

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Terminal, BookOpen, Cpu, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { SiReact, SiPython, SiNodedotjs, SiTailwindcss, SiJavascript, SiPostgresql } from 'react-icons/si';
import myImage from '../assets/myimg.png';

// 3D NEURAL NETWORK COMPONENT
const NeuralNetwork = () => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
  });
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={1500} array={new Float32Array(1500 * 3).map(() => (Math.random() - 0.5) * 40)} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#06b6d4" transparent opacity={0.5} />
    </points>
  );
};

const Home = () => {
  const aboutRef = useRef(null);
  const roles = ["Full-Stack Developer", "Web Designer", "Frontend Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const bio = `const user = {\n  name: "Fenil Patel",\n  role: "Web devlopement",\n  status: "Building 3D Web Apps",\n  skills: ["React", "Python", "Node.js"]\n};`;

  useEffect(() => {
    const roleTimer = setInterval(() => setIndex((p) => (p + 1) % roles.length), 3000);
    let i = 0;
    const typeTimer = setInterval(() => { setText(bio.slice(0, i)); i++; if (i > bio.length) clearInterval(typeTimer); }, 30);
    return () => { clearInterval(roleTimer); clearInterval(typeTimer); };
  }, []);

  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-cyan-500 overflow-x-hidden">
      <div className="fixed inset-0 z-0"><Canvas camera={{ position: [0, 0, 20] }}><NeuralNetwork /></Canvas></div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">FENIL <span className="text-cyan-500">PATEL</span></h1>
            <div className="h-16 mb-8 flex justify-center lg:justify-start items-center">
              <AnimatePresence mode="wait">
                <motion.p key={roles[index]} initial={{ rotateX: 90 }} animate={{ rotateX: 0 }} exit={{ rotateX: -90 }} className="text-2xl md:text-3xl text-cyan-400 font-bold uppercase tracking-widest">{roles[index]}</motion.p>
              </AnimatePresence>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* <button onClick={scrollToAbout} className="px-8 py-3 border border-cyan-500 hover:bg-cyan-500 transition-all font-bold flex items-center gap-2">ABOUT_ME <User size={18} /></button> */}
              <a href="https://github.com/fenil313" target="_blank" rel="noreferrer" className="p-3 border border-white/20 hover:bg-cyan-500 transition-all"><Github /></a>
              <a href="https://www.linkedin.com/in/fenil-patel-96015124a/" target="_blank" rel="noreferrer" className="p-3 border border-white/20 hover:bg-cyan-500 transition-all"><Linkedin /></a>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="w-72 h-72 rounded-2xl border-2 border-cyan-500/30 overflow-hidden shadow-2xl">
            <img src={myImage} className="w-full h-full object-cover" alt="Fenil" />
          </motion.div>
        </div>
      </section>

  

      {/* VS CODE TERMINAL */}
      <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-cyan-500"><Terminal size={20} /> About me</h2>
        <div className="bg-[#1e1e1e] rounded-t-xl p-4 flex gap-2 border border-b-0 border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-400"/><div className="w-3 h-3 rounded-full bg-green-500"/>
        </div>
        <div className="bg-[#0a0a0a] p-8 border border-white/10 rounded-b-xl shadow-2xl">
          <pre className="font-mono text-cyan-300 text-sm md:text-lg">{text}<span className="animate-pulse">|</span></pre>
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      
      <section className="relative z-10 py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-12 flex items-center gap-2 text-cyan-500"><BookOpen size={20} /> ACADEMIC_PATH</h2>
        <div className="space-y-10 border-l-2 border-cyan-500/30 ml-3">
          {[
            { year: "2018", deg: "SSC", sch: "Vidhyanagar Secondary School" },
            { year: "2020", deg: "HSC", sch: "Vidhyanagar High School" },
            { year: "2023", deg: "BCA Degree", sch: "Asia Pacific BCA College" }
          ].map((item, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full" />
              <p className="text-cyan-500 text-xs font-mono">{item.year}</p>
              <h3 className="text-xl font-bold">{item.deg}</h3>
              <p className="text-white/60">{item.sch}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-12 flex items-center gap-2 text-center justify-center text-cyan-500"><Cpu size={20} /> TECH_STACK</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {[SiReact, SiPython, SiNodedotjs, SiTailwindcss, SiJavascript, SiPostgresql].map((Icon, i) => (
            <motion.div whileHover={{ y: -10 }} key={i} className="aspect-square flex items-center justify-center bg-white/5 border border-white/5 hover:border-cyan-500 transition-all">
              <Icon size={40} className="text-cyan-400" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;