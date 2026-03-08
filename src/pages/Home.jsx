// // import React, { useCallback } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Particles from '@tsparticles/react';
// // import { loadFirePreset } from "@tsparticles/preset-fire";
// // import { Linkedin, Github, Twitter, Send, Instagram, Code2 } from 'lucide-react';
// // import myImage from '../assets/myimg.png';

// // const Home = () => {
// //   const navigate = useNavigate();

// //   // Optimized engine loading
// //   const particlesInit = useCallback(async (engine) => {
// //     await loadFirePreset(engine);
// //   }, []);

// //   return (
// //     <main className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      
// //       {/* FIRE PRESET BACKGROUND */}
// //       <Particles
// //         id="tsparticles"
// //         init={particlesInit}
// //         options={{ preset: "fire" }}
// //         className="absolute inset-0 z-0"
// //       />

// //       {/* CONTENT GRID */}
// //       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full px-8">
        
// //         {/* TEXT SECTION */}
// //         <div className="space-y-6 text-center md:text-left">
// //           <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
// //             Hi There,<br />I'm <span className="text-orange-500">Fenil Patel</span>
// //           </h1>
// //           <p className="text-lg md:text-xl text-white/70 italic">I Am Into Full-Stack Architecture |</p>
          
// //           <button 
// //             onClick={() => navigate('/about')}
// //             className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-all font-semibold shadow-lg shadow-orange-500/20"
// //           >
// //             About Me ↓
// //           </button>

// //           {/* SOCIAL LINKS */}
// //           <div className="flex gap-4 justify-center md:justify-start pt-6">
// //             <SocialIcon icon={Github} link="https://github.com/fenil313" />
// //             <SocialIcon icon={Linkedin} link="#" />
          
// //           </div>
// //         </div>

// //         {/* IMAGE PORTAL */}
// //         <div className="flex justify-center">
// //           <div className="w-64 h-64 md:w-80 md:h-80 bg-orange-950 rounded-full flex items-center justify-center overflow-hidden border-4 border-orange-500/30 shadow-2xl shadow-orange-500/20">
// //             <img src={myImage} alt="Fenil" className="w-full h-full object-cover" />
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // const SocialIcon = ({ icon: Icon, link }) => (
// //   <a href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors text-white">
// //     <Icon size={18} />
// //   </a>
// // );

// // export default Home;


// import React, { useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Particles from '@tsparticles/react';
// import { loadSlim } from "@tsparticles/slim";
// import { Linkedin, Github } from 'lucide-react';
// import myImage from '../assets/myimg.png';

// const Home = () => {
//   const navigate = useNavigate();

//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     // 'p-4' ensures breathing room on iPhone SE's narrow edges
//     <main className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center p-4 overflow-x-hidden">
      
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         className="absolute inset-0 z-0"
//         options={{
//           particles: {
//             number: { value: 60 }, // Reduced density for small screens
//             size: { value: 1.5 },
//             move: { enable: true, speed: 0.1 },
//           },
//         }}
//       />

//       {/* DYNAMIC GRID: flex-col on mobile, md:flex-row on tablets/desktops */}
//       <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        
//         {/* TEXT SECTION: Using text-clamp logic via tailwind classes */}
//         <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight break-words">
//             Hi There,<br />I'm <span className="text-blue-400">Fenil Patel</span>
//           </h1>
//           <p className="text-sm sm:text-base text-white/70 italic mt-2">
//             Full-Stack Architect
//           </p>
          
//           <button 
//             onClick={() => navigate('/about')}
//             className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-all font-semibold"
//           >
//             About Me
//           </button>

//           <div className="flex gap-4 mt-6">
//             <SocialIcon icon={Github} link="https://github.com/fenil313" />
//             <SocialIcon icon={Linkedin} link="#" />
//           </div>
//         </div>

//         {/* IMAGE SECTION: Scaled down specifically for small viewports */}
//         <div className="flex-shrink-0">
//           <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-blue-950 rounded-full flex items-center justify-center overflow-hidden border-4 border-blue-500/30 shadow-2xl">
//             <img src={myImage} alt="Fenil" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// const SocialIcon = ({ icon: Icon, link }) => (
//   <a href={link} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
//     <Icon size={16} />
//   </a>
// );

// export default Home;

// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Linkedin, Github } from 'lucide-react';
// import myImage from '../assets/myimg.png';

// const Home = () => {
//   const navigate = useNavigate();
//   const roles = ["Full-Stack Developer", "Frontend Developer", "Web Designer"];
//   const [currentRole, setCurrentRole] = useState(0);
//   const canvasRef = useRef(null);

//   // Dynamic Constellation Logic
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let particles = [];
//     const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
//     window.addEventListener('resize', resize); resize();

//     for (let i = 0; i < 60; i++) {
//       particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2 });
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
//       particles.forEach((p, i) => {
//         p.x += p.vx; p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
//         ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2); ctx.fill();
//         particles.slice(i + 1).forEach(p2 => {
//           const dx = p.x - p2.x, dy = p.y - p2.y;
//           if (Math.hypot(dx, dy) < 150) {
//             ctx.strokeStyle = `rgba(150, 200, 255, ${0.15 - Math.hypot(dx, dy)/1000})`;
//             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
//           }
//         });
//       });
//       requestAnimationFrame(animate);
//     };
//     animate();
//     return () => window.removeEventListener('resize', resize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => setCurrentRole((prev) => (prev + 1) % roles.length), 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className="min-h-screen w-full bg-black flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
      
//       <div className="absolute inset-0 bg-black z-0"></div>
//       <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />

//       <div className="relative z-[2] w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20">
        
//         <div className="flex-1 w-full text-center lg:text-left space-y-6">
//           <h1 
//             className="font-black text-white tracking-tighter leading-[0.9]"
//             style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
//           >
//             FENIL <br/>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PATEL</span>
//           </h1>
          
//           <p className="text-[clamp(1rem,2vw,1.5rem)] text-white/90 font-light tracking-[0.2em] uppercase border-l-4 border-cyan-500 pl-4 inline-block">
//             {roles[currentRole]}
//           </p>

//           <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4">
//             <button 
//               onClick={() => navigate('/about')}
//               className="px-8 py-3 border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all"
//             >
//               About Me
//             </button>
//             <div className="flex gap-6 text-white">
//               <a href="https://github.com/fenil313" className="hover:text-cyan-400 transition-colors"><Github size={24}/></a>
//               <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={24}/></a>
//             </div>
//           </div>
//         </div>

//         {/* PROFILE IMAGE WITH GRADIENT BORDER */}
//         <div className="flex-shrink-0">
//           <div className="w-[clamp(200px,30vw,300px)] h-[clamp(200px,30vw,300px)] rounded-full p-[4px] bg-gradient-to-tr from-cyan-500 via-purple-500 to-blue-500 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
//             <div className="w-full h-full rounded-full overflow-hidden bg-black">
//                <img src={myImage} alt="Fenil" className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;


// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Linkedin, Github } from 'lucide-react';
// import myImage from '../assets/myimg.png';

// const Home = () => {
//   const navigate = useNavigate();
//   const roles = ["Full-Stack Developer", "Frontend Developer", "Web Designer"];
//   const [currentRole, setCurrentRole] = useState(0);
//   const canvasRef = useRef(null);
  
//   // Typing Effect State
//   const [text, setText] = useState("");
//   const fullText = `const userProfile = {
//   name: "Fenil Patel",
//   email: "fenilpatel0301@gmail.com",
//   contact: "+91 90163 79828",
//   skills: ["Python", "Web Development", "React"]
// };`;

//   useEffect(() => {
//     let i = 0;
//     const typingInterval = setInterval(() => {
//       setText(fullText.slice(0, i));
//       i++;
//       if (i > fullText.length) clearInterval(typingInterval);
//     }, 50);
//     return () => clearInterval(typingInterval);
//   }, []);

//   // [YOUR ORIGINAL ANIMATION LOGIC REMAINS HERE]
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     let particles = [];
//     const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
//     window.addEventListener('resize', resize); resize();
//     for (let i = 0; i < 60; i++) {
//       particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2 });
//     }
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
//       particles.forEach((p, i) => {
//         p.x += p.vx; p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
//         ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2); ctx.fill();
//         particles.slice(i + 1).forEach(p2 => {
//           const dx = p.x - p2.x, dy = p.y - p2.y;
//           if (Math.hypot(dx, dy) < 150) {
//             ctx.strokeStyle = `rgba(150, 200, 255, ${0.15 - Math.hypot(dx, dy)/1000})`;
//             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
//           }
//         });
//       });
//       requestAnimationFrame(animate);
//     };
//     animate();
//     return () => window.removeEventListener('resize', resize);
//   }, []);

//   return (
//     <div className="bg-black min-h-screen">
//       {/* YOUR HERO - UNCHANGED */}
//       <main className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
//         <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />
//         <div className="relative z-[2] w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20">
//           <div className="flex-1 w-full text-center lg:text-left space-y-6">
//             <h1 className="font-black text-white tracking-tighter leading-[0.9]" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
//               FENIL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PATEL</span>
//             </h1>
//             <p className="text-[clamp(1rem,2vw,1.5rem)] text-white/90 font-light tracking-[0.2em] uppercase border-l-4 border-cyan-500 pl-4 inline-block">{roles[currentRole]}</p>
//             <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4">
//               <button onClick={() => navigate('/about')} className="px-8 py-3 border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">About Me</button>
//             </div>
//           </div>
//           <div className="w-[250px] h-[250px] rounded-full p-[4px] bg-gradient-to-tr from-cyan-500 to-blue-500">
//             <div className="w-full h-full rounded-full overflow-hidden bg-black"><img src={myImage} alt="Fenil" className="w-full h-full object-cover" /></div>
//           </div>
//         </div>
//       </main>

//       {/* VS CODE "ACTIVE" EDITOR */}
//       <section className="py-24 px-6 md:px-24 bg-black border-t border-white/10">
//         <div className="max-w-3xl mx-auto rounded-lg border border-[#3e3e42] bg-[#0a0a0a] overflow-hidden shadow-2xl">
//           <div className="flex items-center gap-2 px-4 py-2 bg-[#121212] border-b border-[#3e3e42]">
//              <div className="w-3 h-3 rounded-full bg-red-500"></div>
//              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//              <div className="w-3 h-3 rounded-full bg-green-500"></div>
//              <span className="ml-4 text-[12px] text-[#858585]">About</span>
//           </div>
//           <div className="p-8 font-mono text-[14px] text-white min-h-[200px]">
//             <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">|</span></pre>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;




// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Linkedin, Github } from 'lucide-react';
// import myImage from '../assets/myimg.png';

// const Home = () => {
//    const navigate = useNavigate();
//   const roles = ["Full-Stack Developer", "Frontend Developer", "Web Designer"];
//   const [currentRole, setCurrentRole] = useState(0);
//   const canvasRef = useRef(null);
  
//   // Typing Effect State
//   const [text, setText] = useState("");
//   const [status, setStatus] = useState("Initializing...");
//   const fullText = `const userProfile = {
//   name: "Fenil Patel",
//   email: "fenilpatel0301@gmail.com",
//   contact: "+91 90163 79828",
//   skills: ["Python", "Web Development", "React"]
// };`;

//   useEffect(() => {
//     let i = 0;
//     setStatus("Running...");
//     const typingInterval = setInterval(() => {
//       setText(fullText.slice(0, i));
//       i++;
//       if (i > fullText.length) {
//         clearInterval(typingInterval);
//         setStatus("Idle");
//       }
//     }, 40);
//     return () => clearInterval(typingInterval);
//   }, []);

//   // Particle Animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     let particles = [];
//     const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
//     window.addEventListener('resize', resize); resize();
    
//     for (let i = 0; i < 60; i++) {
//       particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2 });
//     }
    
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
//       particles.forEach((p, i) => {
//         p.x += p.vx; p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
//         ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2); ctx.fill();
//         particles.slice(i + 1).forEach(p2 => {
//           const dx = p.x - p2.x, dy = p.y - p2.y;
//           if (Math.hypot(dx, dy) < 150) {
//             ctx.strokeStyle = `rgba(150, 200, 255, ${0.15 - Math.hypot(dx, dy)/1000})`;
//             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
//           }
//         });
//       });
//       requestAnimationFrame(animate);
//     };
//     animate();
//     return () => window.removeEventListener('resize', resize);
//   }, []);

//   return (
//     <div className="bg-black min-h-screen text-white">
//       {/* HERO SECTION */}
//       <main className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
//         <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />
//         <div className="relative z-[2] w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20">
//           <div className="flex-1 w-full text-center lg:text-left space-y-6">
//             <h1 className="font-black tracking-tighter leading-[0.9]" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
//               FENIL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PATEL</span>
//             </h1>
//             <p className="text-[clamp(1rem,2vw,1.5rem)] text-white/90 font-light tracking-[0.2em] uppercase border-l-4 border-cyan-500 pl-4 inline-block">{roles[currentRole]}</p>
//             <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4">
//               <button onClick={() => navigate('/about')} className="px-8 py-3 border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">About Me</button>
//               <div className="flex gap-4">
//                 <a href="https://github.com/fenil313" className="hover:text-cyan-400"><Github size={24}/></a>
//                 <a href="#" className="hover:text-cyan-400"><Linkedin size={24}/></a>
//               </div>
//             </div>
//           </div>
//           <div className="w-[250px] h-[250px] rounded-full p-[4px] bg-gradient-to-tr from-cyan-500 to-blue-500">
//             <div className="w-full h-full rounded-full overflow-hidden bg-black"><img src={myImage} alt="Fenil" className="w-full h-full object-cover" /></div>
//           </div>
//         </div>
//       </main>

//       {/* ABOUT SECTION (VS CODE EDITOR) */}
//       <section className="py-24 px-6 md:px-24 border-t border-white/10">
//         <h2 className="text-center text-[10px] tracking-[0.5em] text-white/40 uppercase mb-12">// ABOUT_US</h2>
//         <div className="max-w-3xl mx-auto rounded-lg border border-[#3e3e42] bg-[#0a0a0a] overflow-hidden shadow-2xl">
//           <div className="flex items-center gap-2 px-4 py-2 bg-[#121212] border-b border-[#3e3e42]">
//              <div className="w-3 h-3 rounded-full bg-red-500"></div>
//              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//              <div className="w-3 h-3 rounded-full bg-green-500"></div>
//              <span className="ml-4 text-[12px] text-[#858585]">About.js — {status}</span>
//           </div>
//           <div className="p-8 font-mono text-[14px] text-white min-h-[200px]">
//             <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">|</span></pre>
//           </div>
//         </div>
//       </section>

//       {/* EDUCATION TIMELINE */}
      
//       <section className="py-24 px-6 md:px-24 border-t border-white/10 bg-[#050505]">
//         <h2 className="text-center text-[10px] tracking-[0.5em] text-white/40 uppercase mb-20">// ACADEMIC_PIPELINE</h2>
//         <div className="max-w-xl mx-auto space-y-12">
//           {[
//             { year: "2018", title: "SSC", school: "Vidhyanagar Secondary School" },
//             { year: "2020", title: "HSC", school: "Vidhyanagar High School" },
//             { year: "2023", title: "BCA Degree", school: "Asia Pacific BCA College" }
//           ].map((edu, i) => (
//             <div key={i} className="flex gap-8 group">
//               <div className="flex flex-col items-center">
//                 <div className="w-4 h-4 rounded-full border border-cyan-500 bg-black group-hover:bg-cyan-500 transition-all"></div>
//                 <div className="w-[2px] h-full bg-gradient-to-b from-cyan-500 to-transparent mt-2"></div>
//               </div>
//               <div className="pb-12">
//                 <span className="text-cyan-500 font-mono text-xs">{edu.year}</span>
//                 <h3 className="text-xl font-bold tracking-tight">{edu.title}</h3>
//                 <p className="text-white/40 text-sm mt-1">{edu.school}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;






  // import React, { useState, useEffect, useRef } from 'react';
  // import { useNavigate } from 'react-router-dom';
  // import { Github, Linkedin, ChevronRight, Terminal } from 'lucide-react';
  // // Importing Real Brand Logos
  // import { 
  //   SiReact, SiPython, SiNodedotjs, SiTailwindcss, 
  //   SiJavascript, SiPostgresql, SiDocker, SiLinux 
  // } from 'react-icons/si';
  // import myImage from '../assets/myimg.png';

  // const Home = () => {
  //   const navigate = useNavigate();
  //   const roles = ["Full-Stack Developer", "Frontend Developer", "Web Designer"];
  //   const [currentRole, setCurrentRole] = useState(0);
  //   const canvasRef = useRef(null);
  //   const [text, setText] = useState("");
  //   const [status, setStatus] = useState("Running");

  //   const fullText = `const userProfile = {
  //   name: "Fenil Patel",
  //   email: "fenilpatel0301@gmail.com",
  //   stack: ["React", "Node", "Python"],
  //   status: "Building the future"
  // };`;

  //   // Real Branded Logos with Official Hex Colors
  //   const techLogos = [
  //     { name: "React", icon: <SiReact />, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
  //     { name: "Python", icon: <SiPython />, color: "text-[#3776AB]", bg: "bg-[#3776AB]/10" },
  //     { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]", bg: "bg-[#339933]/10" },
  //     { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10" },
  //     { name: "JS", icon: <SiJavascript />, color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10" },
  //     { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]", bg: "bg-[#4169E1]/10" },
  //     { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10" },
  //     { name: "Linux", icon: <SiLinux />, color: "text-[#FCC624]", bg: "bg-[#FCC624]/10" },
  //   ];

  //   useEffect(() => {
  //     let i = 0;
  //     const interval = setInterval(() => {
  //       setText(fullText.slice(0, i));
  //       i++;
  //       if (i > fullText.length) { clearInterval(interval); setStatus("Idle"); }
  //     }, 40);
  //     return () => clearInterval(interval);
  //   }, []);

  //   // Particle Background
  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     if (!canvas) return;
  //     const ctx = canvas.getContext('2d');
  //     let particles = [];
  //     const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  //     window.addEventListener('resize', resize); resize();
  //     for (let i = 0; i < 50; i++) {
  //       particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2 });
  //     }
  //     const animate = () => {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  //       particles.forEach(p => {
  //         p.x += p.vx; p.y += p.vy;
  //         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
  //         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  //         ctx.beginPath(); ctx.arc(p.x, p.y, 1, 0, Math.PI * 2); ctx.fill();
  //       });
  //       requestAnimationFrame(animate);
  //     };
  //     animate();
  //     return () => window.removeEventListener('resize', resize);
  //   }, []);

  //   return (
  //     <div className="bg-[#050505] min-h-screen text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
        
  //       {/* HERO SECTION */}
  //       <section className="min-h-screen flex items-center justify-center p-6 relative">
  //         <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />
  //         <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
  //           <div className="flex-1 text-center lg:text-left space-y-8">
  //             <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter">
  //               FENIL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PATEL</span>
  //             </h1>
  //             <p className="text-lg uppercase tracking-[0.4em] text-white/30 font-bold border-l-4 border-cyan-500 pl-4 inline-block">
  //               {roles[currentRole]}
  //             </p>
  //             <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
  //               <button onClick={() => navigate('/about')} className="group flex items-center gap-2 px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
  //                 Profile <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
  //               </button>
  //               <div className="flex items-center gap-4">
  //                 <a href="https://github.com/fenil313" className="p-3 border border-white/10 rounded-full hover:border-cyan-500 transition-all hover:scale-110"><Github size={20}/></a>
  //                 <a href="#" className="p-3 border border-white/10 rounded-full hover:border-cyan-500 transition-all hover:scale-110"><Linkedin size={20}/></a>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="relative group">
  //             <div className="absolute inset-0 bg-cyan-500 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
  //             <div className="w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full p-[3px] bg-gradient-to-tr from-cyan-500 via-blue-600 to-transparent relative z-10">
  //               <div className="w-full h-full rounded-full overflow-hidden bg-black ring-8 ring-black/50">
  //                 <img src={myImage} alt="Fenil" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

      

  //       {/* VS CODE ABOUT SECTION */}
  //       <section className="py-32 px-6">
  //         <div className="max-w-3xl mx-auto">
  //           <div className="bg-[#1e1e1e] px-5 py-3 rounded-t-2xl flex items-center gap-2 border-x border-t border-white/10">
  //             <div className="flex gap-2">
  //               <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-lg shadow-red-500/20"></div>
  //               <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-lg shadow-yellow-500/20"></div>
  //               <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-lg shadow-green-500/20"></div>
  //             </div>
  //             <span className="ml-4 text-[10px] font-mono text-white/30 tracking-widest uppercase flex items-center gap-2">
  //               <Terminal size={12}/> about_me.js — {status}
  //             </span>
  //           </div>
  //           <div className="bg-[#0a0a0a] p-10 border border-white/5 rounded-b-2xl shadow-2xl relative overflow-hidden">
  //             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
  //               <SiReact size={150} />
  //             </div>
  //             <pre className="font-mono text-sm md:text-lg text-cyan-100/70 leading-relaxed relative z-10">
  //               {text}<span className="animate-pulse bg-cyan-500 text-cyan-500 ml-1">|</span>
  //             </pre>
  //           </div>
  //         </div>
  //       </section>

  //       {/* ZIGZAG EDUCATION */}
  //       <section className="py-32 px-6 bg-[#050505]">
  //         <h2 className="text-center text-[10px] tracking-[1em] text-cyan-500 uppercase mb-32 font-black">// EDUCATION_PIPELINE</h2>
  //         <div className="max-w-5xl mx-auto relative">
  //           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent"></div>
            
  //           {[
  //             { year: "2023", title: "BCA Degree", school: "Asia Pacific BCA College" },
  //             { year: "2020", title: "HSC", school: "Vidhyanagar High School" },
  //             { year: "2018", title: "SSC", school: "Vidhyanagar Secondary School" }
  //           ].map((edu, i) => (
  //             <div key={i} className={`flex flex-col md:flex-row mb-24 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
  //               <div className="hidden md:block md:w-1/2"></div>
  //               <div className="z-10 w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.6)] border-4 border-[#050505] mb-8 md:mb-0"></div>
  //               <div className={`w-full md:w-1/2 px-6 md:px-16 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
  //                 <span className="bg-cyan-500/10 text-cyan-500 px-4 py-1 rounded-full font-mono text-xs font-bold tracking-widest">{edu.year}</span>
  //                 <h3 className="text-3xl font-black tracking-tight mt-4 mb-2">{edu.title}</h3>
  //                 <p className="text-white/40 text-lg font-medium">{edu.school}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </section>

  //     </div>
  //   );
  // };

  // export default Home;
git init