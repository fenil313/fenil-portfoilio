import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Terminal, BookOpen, Cpu, ExternalLink, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { SiReact, SiPython, SiJavascript, SiTailwindcss, SiHtml5, SiNodedotjs } from 'react-icons/si';
import { useProjects } from '../context/ProjectContext';
import myImage from '../assets/myimg.png';

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
  const navigate = useNavigate();
  const projects = useProjects() || [];
  const featured = projects.slice(0, 3);
  
  const roles = ["Full-Stack Developer", "Web Designer", "Frontend Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const bio = `const user = {\n  name: "Fenil Patel",\n  role: "Web development",\n  status: "Building 3D Web Apps",\n  skills: ["React", "Python"]\n};`;

  useEffect(() => {
    const roleTimer = setInterval(() => setIndex((p) => (p + 1) % roles.length), 3000);
    let i = 0;
    const typeTimer = setInterval(() => { setText(bio.slice(0, i)); i++; if (i > bio.length) clearInterval(typeTimer); }, 30);
    return () => { clearInterval(roleTimer); clearInterval(typeTimer); };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-cyan-500 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none"><Canvas camera={{ position: [0, 0, 20] }}><NeuralNetwork /></Canvas></div>

      {/* 1. HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase">FENIL <span className="text-cyan-500">PATEL</span></h1>
            <div className="h-16 mb-8 text-cyan-400 font-bold uppercase text-2xl tracking-widest">{roles[index]}</div>
          </motion.div>
          <div className="w-72 h-72 rounded-2xl border-2 border-cyan-500/30 overflow-hidden shadow-2xl">
            <img src={myImage} className="w-full h-full object-cover" alt="Fenil" />
          </div>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-cyan-500 flex items-center gap-2"><Terminal size={20} /> ABOUT_ME</h2>
        <div className="bg-[#0a0a0a] p-8 border border-white/10 rounded-xl shadow-2xl">
            <pre className="font-mono text-cyan-300 text-sm md:text-lg">{text}<span className="animate-pulse">|</span></pre>
        </div>
      </section>

      {/* 3. TECH STACK */}
      <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-12 text-cyan-500 flex items-center justify-center gap-2"><Cpu size={20} /> TECH_STACK</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {[SiReact, SiPython, SiNodedotjs, SiTailwindcss, SiJavascript, SiHtml5].map((Icon, i) => (
            <motion.div whileHover={{ y: -10 }} key={i} className="aspect-square flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500 transition-all">
                <Icon size={40} className="text-cyan-400" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PROJECTS (Placed AFTER Skills) */}
      
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">SELECTED <span className="text-cyan-500">WORKS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden group">
              <div className="h-52 overflow-hidden"><img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/></div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 uppercase">{project.title}</h4>
                <p className="text-white/40 text-sm mb-6">{project.desc}</p>
                <div className="flex gap-4">
                  <a href={project.github} className="hover:text-cyan-400"><Github size={20}/></a>
                  <a href={project.demo} className="hover:text-cyan-400"><ExternalLink size={20}/></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
            <button onClick={() => navigate('/projects')} className="px-8 py-3 border border-cyan-500 text-cyan-500 font-bold uppercase text-xs hover:bg-cyan-500 hover:text-black transition-all rounded-full">View All</button>
        </div>
      </section>

      {/* 5. ACADEMIC PATH */}
      <section className="relative z-10 py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-12 text-cyan-500 flex items-center gap-2"><BookOpen size={20} /> ACADEMIC_PATH</h2>
        <div className="space-y-10 border-l-2 border-cyan-500/30 ml-3">
          {[ { year: "2018", deg: "SSC", sch: "Vidhyanagar Secondary School" }, { year: "2020", deg: "HSC", sch: "Vidhyanagar High School" }, { year: "2023", deg: "BCA Degree", sch: "Asia Pacific BCA College" } ].map((item, i) => (
            <div key={i} className="relative pl-8"><div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full" /><p className="text-cyan-500 text-xs font-mono">{item.year}</p><h3 className="text-xl font-bold">{item.deg}</h3><p className="text-white/60">{item.sch}</p></div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT SECTION (New) */}
      <section className="relative z-10 py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter">LET'S <span className="text-cyan-500">COLLABORATE</span></h2>
        <p className="text-white/40 mb-10 max-w-md mx-auto">Got a project, a question, or just want to say hi? I'm always open to discussing new ideas.</p>
        <button 
          onClick={() => navigate('/contact')} 
          className="inline-flex items-center gap-2 px-10 py-4 bg-cyan-500 text-black font-bold uppercase text-sm hover:bg-white transition-all rounded-full tracking-widest"
        >
          <Mail size={18} /> GET IN TOUCH
        </button>
      </section>
    </div>
  );
};

export default Home;