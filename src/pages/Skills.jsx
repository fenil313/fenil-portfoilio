  // import React, { useLayoutEffect, useRef } from 'react';
  // import { motion } from 'framer-motion';
  // import gsap from 'gsap';
  // import { ScrollTrigger } from 'gsap/ScrollTrigger';
  // import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGitAlt, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
  // import { SiDjango, SiFastapi, SiRedux, SiPostgresql, SiRedis } from 'react-icons/si';

  // gsap.registerPlugin(ScrollTrigger);

  // const DATA_POINTS = [
  //   { label: "FRONTEND_CORE", skills: [
  //     { n: "REACT", i: <FaReact />, c: "#61DAFB" }, { n: "JS", i: <FaJs />, c: "#F7DF1E" },
  //     { n: "HTML5", i: <FaHtml5 />, c: "#E34F26" }, { n: "CSS3", i: <FaCss3Alt />, c: "#1572B6" }, 
  //     { n: "REDUX", i: <SiRedux />, c: "#764ABC" }
  //   ]},
  //   { label: "BACKEND_ENGINE", skills: [
  //     { n: "PYTHON", i: <FaPython />, c: "#3776AB" },, 
  //     { n: "FASTAPI", i: <SiFastapi />, c: "#05998B" }
  //   ]},
  //   { label: "STORAGE_LAYER", skills: [
  //      { n: "DJANGO", i: <SiDjango />, c: "#092E20" }
  //   ]},
  //   { label: "INFRA_DEVOPS", skills: [
  //     { n: "DOCKER", i: <FaDocker />, c: "#2496ED" }, { n: "AWS", i: <FaAws />, c: "#FF9900" }, 
  //     { n: "GIT", i: <FaGitAlt />, c: "#F05032" }, { n: "GITHUB", i: <FaGithub />, c: "#FFFFFF" }
  //   ]}
  // ];

  // const Skills = () => {
  //   const containerRef = useRef(null);

  //   useLayoutEffect(() => {
  //     let ctx = gsap.context(() => {
  //       gsap.from(".data-row", {
  //         opacity: 0, x: -30, duration: 1, stagger: 0.2,
  //         scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
  //       });
  //     }, containerRef);
  //     return () => ctx.revert();
  //   }, []);

  //   return (
  //     <div ref={containerRef} className="bg-[#020202] min-h-screen  text-white font-mono">
  //       <div className="mb-20">
  //         <h2 className="text-blue-500 text-[10px] tracking-[0.6em]">// SYSTEM_OPERATIONS</h2>
  //         <h1 className="text-3xl font-bold mt-4">TECHNICAL_CAPABILITY_MATRIX</h1>
  //       </div>

  //       <div className="space-y-16">
  //         {DATA_POINTS.map((set, idx) => (
  //           <div key={idx} className="data-row flex flex-col md:flex-row border-b border-white/5 pb-12">
  //             <div className="w-full md:w-1/4 text-[10px] tracking-widest text-gray-500 mb-6">{set.label}</div>
  //             <div className="w-full md:w-3/4 flex flex-wrap gap-x-12 gap-y-8">
  //               {set.skills.map((skill, i) => (
  //                 <motion.div 
  //                   key={i} 
  //                   className="group flex flex-col items-center gap-3 cursor-pointer"
  //                   whileHover={{ y: -5 }}
  //                 >
  //                   <motion.div 
  //                     className="text-3xl transition-colors duration-300"
  //                     style={{ color: '#333' }}
  //                     whileHover={{ color: skill.c, scale: 1.2 }}
  //                   >
  //                     {skill.i}
  //                   </motion.div>
  //                   <span className="text-[9px] font-bold tracking-widest text-[#333] group-hover:text-white transition-colors">
  //                     {skill.n}
  //                   </span>
  //                 </motion.div>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  // export default Skills;

  import React, { useRef } from 'react';
  import { useGSAP } from '@gsap/react';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
  import { SiFastapi, SiPostgresql, SiRedux } from 'react-icons/si';

  gsap.registerPlugin(ScrollTrigger);

  const DATA_POINTS = [
    { label: "FRONTEND_CORE", skills: [
      { n: "REACT", i: <FaReact />, c: "#61DAFB" }, { n: "JS", i: <FaJs />, c: "#F7DF1E" },
      { n: "REDUX", i: <SiRedux />, c: "#764ABC" }, { n: "HTML5", i: <FaHtml5 />, c: "#E34F26" }
    ]},
    { label: "BACKEND_ENGINE", skills: [
      { n: "PYTHON", i: <FaPython />, c: "#3776AB" }, { n: "FASTAPI", i: <SiFastapi />, c: "#05998B" }
    ]},
    { label: "INFRA_STORAGE", skills: [
      { n: "POSTGRES", i: <SiPostgresql />, c: "#336791" }, { n: "DOCKER", i: <FaDocker />, c: "#2496ED" },
      { n: "AWS", i: <FaAws />, c: "#FF9900" }, { n: "GIT", i: <FaGitAlt />, c: "#F05032" }
    ]}
  ];

  const Skills = () => {
    const container = useRef(null);

    useGSAP(() => {
      gsap.from(".skill-row", {
        opacity: 0,
        x: -30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: { trigger: ".matrix-container", start: "top 80%" }
      });
    }, { scope: container });

    return (
      <main ref={container} className="bg-[#020202] text-white min-h-screen py-24 px-8 md:px-32 font-mono">
        
        {/* HEADER */}
        <div className="mb-24">
          <h2 className="text-blue-500 text-[10px] tracking-[0.6em] uppercase">// SYSTEM_OPERATIONS</h2>
          <h1 className="text-3xl font-bold mt-4">TECHNICAL_CAPABILITY_MATRIX</h1>
        </div>

        

        {/* MATRIX */}
        <div className="matrix-container space-y-16">
          {DATA_POINTS.map((set, idx) => (
            <div key={idx} className="skill-row flex flex-col md:flex-row border-b border-white/5 pb-12">
              <div className="w-full md:w-1/4 text-[10px] tracking-widest text-white/40 mb-6">{set.label}</div>
              <div className="w-full md:w-3/4 flex flex-wrap gap-x-12 gap-y-8">
                {set.skills.map((skill, i) => (
                  <div key={i} className="group flex flex-col items-center gap-3 cursor-pointer">
                    <div 
                      className="text-3xl transition-colors duration-300"
                      style={{ color: '#333' }}
                      onMouseOver={(e) => e.target.style.color = skill.c}
                      onMouseOut={(e) => e.target.style.color = '#333'}
                    >
                      {skill.i}
                    </div>
                    <span className="text-[9px] font-bold tracking-widest text-[#333] group-hover:text-white transition-colors">
                      {skill.n}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  };

  export default Skills;