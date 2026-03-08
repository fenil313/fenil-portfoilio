// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import profileImg from '../assets/myimg.png'; 

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const containerRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       // Reveal animations triggered on scroll
//       gsap.from(".reveal", {
//         opacity: 0,
//         y: 20,
//         duration: 0.8,
//         stagger: 0.1,
//         scrollTrigger: { trigger: ".content-zone", start: "top 80%" }
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="bg-[#020202] text-white min-h-screen w-full font-sans selection:bg-blue-600">
      
//       {/* RESPONSIVE LAYOUT CONTAINER */}
//       <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
//         {/* SIDEBAR: Sticky on Desktop, Static on Mobile */}
//         <aside className="w-full lg:w-[380px] p-8 md:p-12 lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between shrink-0">
//           <div>
//             <p className="text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase">// SYSTEM_IDENTITY</p>
//             <h1 className="text-[clamp(3rem,8vw,6rem)] font-black italic mt-2 leading-[0.85] tracking-tighter">
//               FENIL<br/>PATEL
//             </h1>
//           </div>
          
//           <div className="mt-12 lg:mt-0">
//             {/* Aspect ratio container ensures image doesn't shift layout */}
//             <div className="w-full max-w-[320px] lg:max-w-none aspect-[4/5] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
//               <img src={profileImg} alt="Fenil Patel" className="w-full h-full object-cover" />
//             </div>
//             <div className="mt-6 flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//               <p className="text-green-500 font-mono text-[10px] uppercase tracking-widest">Available for hire</p>
//             </div>
//           </div>
//         </aside>

//         {/* MAIN CONTENT: Fluid scaling */}
//         <main className="content-zone flex-1 p-8 md:p-16 lg:p-24 space-y-20 lg:space-y-32">
          
//           <section className="reveal max-w-2xl">
//             <p className="text-[clamp(1.25rem,3vw,2.5rem)] font-light leading-tight">
//               I architect <span className="text-blue-400 font-semibold">Python-powered backends</span> and craft <span className="text-blue-400 font-semibold">React interfaces</span>. I focus on clean logic, system efficiency, and bridging the gap between raw data and human-centered design.
//             </p>
//           </section>

//           <section className="reveal">
//             <h3 className="text-blue-500 font-bold uppercase text-[9px] tracking-[0.3em] mb-10 border-l border-blue-500 pl-4">02. CONNECTION_DATA</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[12px] font-mono text-gray-400">
//               <div><p className="text-white mb-1">Email</p><p>fenil0301@email.com</p></div>
//               <div><p className="text-white mb-1">Coordinates</p><p>Ahmedabad, India</p></div>
//               <div><p className="text-white mb-1">Mobile</p><p>+91 90163 79828</p></div>
//               <div><p className="text-white mb-1">Repository</p><p>github.com/fenil313</p></div>
//             </div>
//           </section>

//           <section className="reveal pb-24">
//             <h3 className="text-blue-500 font-bold uppercase text-[9px] tracking-[0.3em] mb-10 border-l border-blue-500 pl-4">03. TECHNICAL_MATRIX</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { title: "Backend Systems", desc: "FastAPI, Django, Python" },
//                 { title: "Frontend Frameworks", desc: "React.js, Tailwind, Vite" },
//                 { title: "Database & Cloud", desc: "PostgreSQL, System Design" },
//                 { title: "Development Tools", desc: "Git, Linux, Docker" }
//               ].map((tech) => (
//                 <div key={tech.title} className="p-6 border border-white/5 hover:border-blue-500/50 transition-colors">
//                   <h4 className="text-white font-bold text-sm mb-2">{tech.title}</h4>
//                   <p className="text-gray-400 text-xs font-mono">{tech.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import profileImg from '../assets/myimg.png'; 

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const containerRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.from(".reveal", { opacity: 0, y: 15, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: ".content-zone", start: "top 85%" } });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="bg-[#020202] text-white min-h-screen w-full font-sans overflow-x-hidden selection:bg-blue-600">
      
//       {/* HUD NAVBAR WITH GENEROUS SPACING */}
//       <nav className="w-full border-b border-white/10 p-6 md:p-8 sticky top-0 bg-[#020202]/90 backdrop-blur z-50">
//         <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] uppercase tracking-[0.3em] font-mono">
//           {['01_ID', '02_MATRIX', '03_CONTACT', '04_RESUME'].map((item) => (
//             <li key={item} className="hover:text-blue-500 cursor-pointer transition-colors">{`[${item}]`}</li>
//           ))}
//         </ul>
//       </nav>

//       {/* GRID LAYOUT WITH LARGE GUTTERS */}
//       <div className="grid grid-cols-1 lg:grid-cols-[350px,1fr] p-6 md:p-16 lg:p-24 gap-12 lg:gap-20">
        
//         {/* SIDEBAR */}
//         <aside className="space-y-12">
//           <div className="space-y-2">
//             <p className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">// SYSTEM_IDENTITY</p>
//             {/* NAME: Force break with significant margin to prevent crowding */}
//             <h1 className="text-[clamp(3rem,10vw,6rem)] font-black italic leading-[0.85] tracking-tighter break-words">
//               FENIL<br/>PATEL
//             </h1>
//           </div>
          
//           <div className="w-full max-w-[320px] aspect-[4/5] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
//             <img src={profileImg} alt="Fenil Patel" className="w-full h-full object-cover" />
//           </div>
//         </aside>

//         {/* MAIN CONTENT ZONE WITH INCREASED MARGINS */}
//         <main className="content-zone space-y-24">
          
//           <section className="reveal max-w-2xl">
//             <p className="text-[clamp(1.2rem,2.5vw,2rem)] font-light leading-snug break-words">
//               I architect <span className="text-blue-500 font-semibold">Python-powered backends</span> and craft <span className="text-blue-500 font-semibold">React interfaces</span>. I bridge raw system logic with human-centered design for high-performance infrastructure.
//             </p>
//           </section>

          

//           <section className="reveal">
//             <h3 className="text-blue-500 font-bold uppercase text-[9px] tracking-[0.3em] mb-10 border-l border-blue-500 pl-6">// 02_CONNECTION_DATA</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[11px] font-mono text-gray-400">
//               <div className="bg-white/[0.02] p-8 border border-white/5 break-words">
//                 <p className="text-white mb-2">EMAIL_ADDRESS</p>
//                 <p className="break-all text-white/80">fenil0301@email.com</p>
//               </div>
//               <div className="bg-white/[0.02] p-8 border border-white/5">
//                 <p className="text-white mb-2">PHYSICAL_LOCATION</p>
//                 <p className="text-white/80">Ahmedabad, India</p>
//               </div>
//             </div>
//           </section>

//           <section className="reveal pb-32">
//             <h3 className="text-blue-500 font-bold uppercase text-[9px] tracking-[0.3em] mb-10 border-l border-blue-500 pl-6">// 03_TECHNICAL_MATRIX</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { title: "Backend Systems", desc: "FastAPI, Django, Python" },
//                 { title: "Frontend Frameworks", desc: "React.js, Tailwind, Vite" }
//               ].map((tech) => (
//                 <div key={tech.title} className="p-8 border border-white/5 bg-white/[0.02] hover:border-blue-500/50 transition-colors">
//                   <h4 className="text-white font-bold text-[12px] mb-2">{tech.title}</h4>
//                   <p className="text-gray-400 text-[10px] font-mono uppercase tracking-widest">{tech.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, Terminal, Cpu, Database, Layout } from 'lucide-react';
import profileImg from '../assets/myimg.png'; 

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  // Radar Scroll Logic
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered reveal animation
      gsap.from(".reveal-item", { 
        opacity: 0, 
        y: 40, 
        duration: 1, 
        stagger: 0.2, 
        scrollTrigger: { trigger: ".content-zone", start: "top 75%" } 
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#020202] text-white min-h-screen selection:bg-blue-600">
      
      {/* RADAR SCROLL TOP */}
      {showScroll && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="fixed bottom-10 right-10 z-[100] w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500 transition-all bg-[#020202]">
          <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin-slow"></div>
          <ArrowUp size={20} />
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[380px,1fr]">
        
        {/* SIDEBAR */}
        <aside className="p-12 border-r border-white/5 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between">
          <div>
            <p className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">// SYSTEM_IDENTITY</p>
            <h1 className="text-[5rem] font-black italic leading-[0.85] tracking-tighter mt-4">FENIL<br/>PATEL</h1>
          </div>
          <div className="w-full aspect-[4/5] border border-white/10 overflow-hidden mt-10">
            <img src={profileImg} alt="Fenil" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </aside>

        {/* CONTENT */}
        <main className="content-zone p-12 lg:p-24 space-y-24">
          
          <section className="reveal-item max-w-2xl">
            <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8">// 01_ARCHITECTURE_OVERVIEW</h2>
            <p className="text-3xl font-light leading-tight">
              I architect <span className="text-blue-400 font-semibold">robust backend systems</span> and build <span className="text-blue-400 font-semibold">performant frontend interfaces</span>.
            </p>
          </section>

          

          <section className="reveal-item">
            <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8">// 02_TECHNICAL_MATRIX</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Cpu />, title: "Backend Systems", desc: "Python, FastAPI, Django" },
                { icon: <Layout />, title: "Frontend Frameworks", desc: "React.js, Tailwind, Vite" },
                { icon: <Database />, title: "Database Layer", desc: "PostgreSQL, Redis" },
                { icon: <Terminal />, title: "Systems & Ops", desc: "Docker, Linux, AWS" }
              ].map((tech) => (
                <div key={tech.title} className="p-8 border border-white/5 bg-white/[0.02] hover:border-blue-500 transition-colors">
                  <div className="text-blue-500 mb-4">{tech.icon}</div>
                  <h4 className="font-bold text-sm mb-1">{tech.title}</h4>
                  <p className="text-gray-400 text-xs font-mono">{tech.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default About;