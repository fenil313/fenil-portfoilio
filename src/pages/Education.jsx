// // import React, { useRef } from 'react';
// // import { useGSAP } from '@gsap/react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { ArrowDown, ArrowUp } from 'lucide-react';

// // gsap.registerPlugin(ScrollTrigger);

// // // const educationData = [
// // //   { year: "2023", degree: "BCA degree", school: "Asia pacific Bca collage ", cgpa: "6.25" },
// // //   { year: "2020", degree: "HSC ", school: " Vidhyanagar High school", cgpa: "5.9",  },
// // //   { year: "2018", degree: "SSC ", school: "Vidhyanagar Secondary School", cgpa: "5.6" }
// // // ];

// // const Education = () => {
// //   const container = useRef(null);

// //   // Toggle Scroll Direction
// //   const toggleScroll = (direction) => {
// //     const amount = direction === 'down' ? window.innerHeight : -window.innerHeight;
// //     window.scrollBy({ top: amount, behavior: 'smooth' });
// //   };

// //   useGSAP(() => {
// //     // Staggered reveal that won't clip text
// //     gsap.from(".edu-item", {
// //       opacity: 0,
// //       y: 50,
// //       stagger: 0.3,
// //       scrollTrigger: { trigger: ".edu-container", start: "top 80%" }
// //     });
// //   }, { scope: container });

// //   return (
// //     <main ref={container} className="min-h-screen bg-[#050505] text-white pt-20 pb-40 w-full overflow-x-hidden">
      
// //       {/* HEADER */}
// //       <div className="px-6 mb-20 text-center">
// //         <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter">ACADEMIC.</h1>
// //       </div>

// //       {/* DYNAMIC SCROLL CONTAINER */}
// //       <div className="edu-container max-w-xl mx-auto px-6 space-y-24">
// //         {educationData.map((edu, i) => (
// //           <div key={i} className="edu-item p-8 border border-white/10 rounded-3xl bg-white/[0.02]">
// //             <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold">{edu.year}</span>
// //             <h2 className="text-3xl font-light mt-4 leading-tight">{edu.degree}</h2>
// //             <p className="text-white/50 text-sm mt-2">{edu.school}</p>
// //             <div className="flex gap-8 mt-8 border-t border-white/10 pt-6">
// //               <div><p className="text-[9px] text-white/30 uppercase">CGPA</p><p className="text-sm">{edu.cgpa}</p></div>
// //               <div><p className="text-[9px] text-white/30 uppercase">Honors</p><p className="text-sm">{edu.honors}</p></div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* FLOATING ACTION BUTTONS */}
// //       <div className="fixed bottom-10 right-10 flex flex-col gap-4">
// //         <button onClick={() => toggleScroll('up')} className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all"><ArrowUp size={20}/></button>
// //         <button onClick={() => toggleScroll('down')} className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all"><ArrowDown size={20}/></button>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Education;


// // import React, { useRef } from 'react';
// // import { useGSAP } from '@gsap/react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { ArrowDown, ArrowUp } from 'lucide-react';

// // gsap.registerPlugin(ScrollTrigger);

// // // const educationData = [
// // //   { year: "2023", degree: "BCA degree", school: "Asia pacific Bca collage ", cgpa: "6.25" },
// // //   { year: "2020", degree: "HSC ", school: " Vidhyanagar High school", cgpa: "5.9",  },
// // //   { year: "2018", degree: "SSC ", school: "Vidhyanagar Secondary School", cgpa: "5.6" }
// // // ];

// // const Education = () => {
// //   const container = useRef(null);

// //   // Toggle Scroll Direction
// //   const toggleScroll = (direction) => {
// //     const amount = direction === 'down' ? window.innerHeight : -window.innerHeight;
// //     window.scrollBy({ top: amount, behavior: 'smooth' });
// //   };

// //   useGSAP(() => {
// //     // Staggered reveal that won't clip text
// //     gsap.from(".edu-item", {
// //       opacity: 0,
// //       y: 50,
// //       stagger: 0.3,
// //       scrollTrigger: { trigger: ".edu-container", start: "top 80%" }
// //     });
// //   }, { scope: container });

// //   return (
// //     <main ref={container} className="min-h-screen bg-[#050505] text-white pt-20 pb-40 w-full overflow-x-hidden">
      
// //       {/* HEADER */}
// //       <div className="px-6 mb-20 text-center">
// //         <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter">ACADEMIC.</h1>
// //       </div>

// //       {/* DYNAMIC SCROLL CONTAINER */}
// //       <div className="edu-container max-w-xl mx-auto px-6 space-y-24">
// //         {educationData.map((edu, i) => (
// //           <div key={i} className="edu-item p-8 border border-white/10 rounded-3xl bg-white/[0.02]">
// //             <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold">{edu.year}</span>
// //             <h2 className="text-3xl font-light mt-4 leading-tight">{edu.degree}</h2>
// //             <p className="text-white/50 text-sm mt-2">{edu.school}</p>
// //             <div className="flex gap-8 mt-8 border-t border-white/10 pt-6">
// //               <div><p className="text-[9px] text-white/30 uppercase">CGPA</p><p className="text-sm">{edu.cgpa}</p></div>
// //               <div><p className="text-[9px] text-white/30 uppercase">Honors</p><p className="text-sm">{edu.honors}</p></div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* FLOATING ACTION BUTTONS */}
// //       <div className="fixed bottom-10 right-10 flex flex-col gap-4">
// //         <button onClick={() => toggleScroll('up')} className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all"><ArrowUp size={20}/></button>
// //         <button onClick={() => toggleScroll('down')} className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all"><ArrowDown size={20}/></button>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Education;


// import React, { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const educationData = [

//  { year: "2018", degree: "SSC", school: "Vidhyanagar Secondary School", cgpa: "5.6" },
//   { year: "2020", degree: "HSC", school: "Vidhyanagar High School", cgpa: "5.9" },
//   { year: "2023", degree: "BCA Degree", school: "Asia Pacific BCA College", cgpa: "6.25" }
 
// ];

// const Education = () => {
//   const container = useRef(null);

//   useGSAP(() => {
//     // Pin and Scale Effect
//     const cards = gsap.utils.toArray(".card-pin");
//     cards.forEach((card, i) => {
//       gsap.fromTo(card, 
//         { scale: 0.8, opacity: 0 },
//         { 
//           scale: 1, opacity: 1,
//           scrollTrigger: {
//             trigger: card,
//             start: "top 70%",
//             end: "top 30%",
//             scrub: 1,
//             toggleActions: "play reverse play reverse"
//           }
//         }
//       );
//     });
//   }, { scope: container });

//   return (
//     <main ref={container} className="bg-[#030303] text-white min-h-screen py-20">
      
//       {/* HEADER SECTION */}
//       <div className="text-center mb-32 px-6">
//         <h1 className="text-[15vw] md:text-[8rem] font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
//           Education
//         </h1>
//       </div>

//       {/* PINNED CARDS */}
//       <div className="max-w-2xl mx-auto px-6 space-y-[40vh]">
//         {educationData.map((edu, i) => (
//           <div key={i} className="card-pin sticky top-[20%] p-12 border border-white/10 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md">
//             <span className="text-[10px] font-bold tracking-[0.5em] text-blue-500">{edu.year}</span>
//             <h2 className="text-4xl md:text-5xl font-light mt-6">{edu.degree}</h2>
//             <p className="text-white/40 mt-2 tracking-widest uppercase text-xs">{edu.school}</p>
//             <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6">
//               <div className="text-center">
//                 <p className="text-[9px] uppercase text-white/30 tracking-widest">CGPA</p>
//                 <p className="text-xl font-mono mt-1">{edu.cgpa}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* PROGRESS NAVIGATOR */}
//       <div className="fixed bottom-10 right-10 z-50">
//         <div className="relative w-20 h-20">
//           <svg className="w-full h-full -rotate-90">
//             <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="2" fill="none" className="opacity-10" />
//             <circle cx="40" cy="40" r="35" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="220" strokeDashoffset="50" />
//           </svg>
//           <button 
//             onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
//             className="absolute inset-0 m-auto text-sm font-bold"
//           >
//             SCROLL
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Education;




// import React, { useRef, useState } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// const educationData = [
//   { year: "2017-2018", degree: "SSC", school: "Vidhyanagar Secondary School", cgpa: "5.6", desc: "Completed my ssc exams" },
//   { year: "2019-2020", degree: "HSC", school: "Vidhyanagar High School", cgpa: "5.9", desc: "Completed my Hsc exams." },
//   { year: "2020-2023", degree: "BCA Degree", school: "Asia Pacific BCA College", cgpa: "6.25", desc: "Completed my BCA degree " }
// ];
// const Education = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <main className="bg-[#020202] min-h-screen text-white font-mono flex flex-col md:flex-row overflow-hidden">
//       {/* LEFT: DATA_TICKER */}
//       <div className="w-full md:w-1/3 border-r border-white/10 p-12 flex flex-col justify-center">
//        <div className="space-y-8">
//           {educationData.map((edu, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className={`block text-left transition-all duration-300 ${activeIndex === i ? 'text-white' : 'text-white/20'}`}
//             >
//               <span className="text-[10px] block mb-1">0{i + 1} / 0{educationData.length}</span>
//               <span className="text-2xl font-bold">{edu.year}</span>
//             </button>
//           ))}
//         </div>
//       </div>



//       {/* RIGHT: DATA_DETAIL_PANE */}

//       <div className="w-full md:w-2/3 p-12 md:p-24 flex flex-col justify-center">

       

//         <div className="max-w-lg">

//           <h1 className="text-blue-500 text-[10px] tracking-[0.6em] uppercase mb-4">// Education {educationData[activeIndex].year}</h1>

//           <h2 className="text-5xl font-black mb-6">{educationData[activeIndex].degree}</h2>

//           <p className="text-white/50 text-lg mb-12">{educationData[activeIndex].school}</p>

         

//           <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">

//             <div>

//               <p className="text-[9px] uppercase tracking-widest text-white/30">Metric</p>

//               <p className="text-2xl font-mono">{educationData[activeIndex].cgpa}</p>

//             </div>

//             <div>

//               <p className="text-[9px] uppercase tracking-widest text-white/30">Scope</p>

//               <p className="text-sm font-light mt-1">{educationData[activeIndex].desc}</p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </main>

//   );

// };



// export default Education; 


import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const educationData = [
  { year: "2017-2018", degree: "SSC", school: "Vidhyanagar Secondary School", cgpa: "5.6", desc: "Foundational secondary education focusing on core sciences." },
  { year: "2019-2020", degree: "HSC", school: "Vidhyanagar High School", cgpa: "5.9", desc: "Advanced studies in Science stream preparing for technical specialization." },
  { year: "2020-2023", degree: "BCA Degree", school: "Asia Pacific BCA College", cgpa: "6.25", desc: "Software engineering, data structures, and web architecture foundations." }
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const container = useRef();

  // GSAP animation for smooth content transitions
  useGSAP(() => {
    gsap.fromTo(".fade-in", 
      { opacity: 0, x: 20 }, 
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
    );
  }, { dependencies: [activeIndex], scope: container });

  return (
    <main ref={container} className="bg-[#020202] min-h-screen text-white font-mono flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT: DATA_TICKER */}
      <div className="w-full md:w-1/3 border-r border-white/10 p-12 flex flex-col justify-center bg-[#030303]">
       <div className="space-y-12">
          {educationData.map((edu, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`block text-left transition-all duration-300 ${activeIndex === i ? 'text-white' : 'text-white/10'}`}
            >
              <span className="text-[9px] block mb-2 tracking-[0.2em]">// 0{i + 1}</span>
              <span className="text-3xl font-black">{edu.year}</span>
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: DATA_DETAIL_PANE */}
      <div className="w-full md:w-2/3 p-12 md:p-24 flex flex-col justify-center">
        <div className="max-w-xl fade-in">
          <h1 className="text-blue-500 text-[10px] tracking-[0.6em] uppercase mb-6">// {educationData[activeIndex].degree}</h1>
          <h2 className="text-6xl font-black mb-6 leading-tight">{educationData[activeIndex].degree}</h2>
          <p className="text-white/50 text-xl mb-16 border-l-2 border-blue-500 pl-6">{educationData[activeIndex].school}</p>

          <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Cumulative Metric</p>
              <p className="text-4xl font-bold">{educationData[activeIndex].cgpa}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Academic Scope</p>
              <p className="text-sm font-light text-white/70 leading-relaxed">{educationData[activeIndex].desc}</p>
            </div>
          </div>
        </div>
        
        {/* Visual representation of academic progression */}
        <div className="mt-20">
          <p className="text-[9px] text-white/20 uppercase tracking-widest mb-4">// PROGRESSION_STATUS</p>
          <div className="w-full h-1 bg-white/5 relative">
            <div 
              className="h-full bg-blue-500 transition-all duration-500" 
              style={{ width: `${((activeIndex + 1) / educationData.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      
    </main>
  );
};

export default Education;