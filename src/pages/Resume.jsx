// =import React from 'react';
// import { Mail, Phone, MapPin, Briefcase, Code2, Zap, Box } from 'lucide-react';
// // 1. Ensure this path has an extension, e.g., '../assets/myimg.jpg'
// // import myimg from '../assets/myimg.png'; 

// const Resume = () => {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/fenil-patel-resume.pdf';
//     link.download = 'Fenil_Patel_Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <main className="bg-black min-h-screen py-10 px-4 md:px-20 text-white font-sans">
//       <div className="max-w-5xl mx-auto bg-[#0a0a0a] border border-white/10 p-10 md:p-16 shadow-2xl">
        
//         {/* TOP HEADER */}
//         <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8">
//           <div className="flex items-center gap-8">
//             {/* 2. REMOVE QUOTES AROUND {myimg} */}
//             <img src={myimg} className="w-32 h-32 rounded-full border-2 border-white object-cover" alt="Profile" />
//             <div>
//               <h1 className="text-5xl font-black uppercase italic tracking-tighter">FENIL PATEL</h1>
//               <p className="text-blue-500 font-bold tracking-widest uppercase">Frontend Engineer</p>
//             </div>
//           </div>
//           <button onClick={handleDownload} className="mt-6 md:mt-0 bg-white text-black px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition-all font-bold uppercase text-xs">
//             Download PDF
//           </button>
//         </div>

//         {/* MAIN BODY GRID */}
//         <div className="grid md:grid-cols-3 gap-12">
          
//           {/* LEFT SIDEBAR */}
//           <div className="space-y-10">
//             <div>
//               <h3 className="text-xs font-black uppercase text-gray-500 mb-4 tracking-widest">Contact</h3>
//               <div className="space-y-3 text-sm">
//                 <p className="flex items-center gap-3"><Mail size={16} className="text-red-500" /> fenil@email.com</p>
//                 <p className="flex items-center gap-3"><Phone size={16} className="text-green-500" /> +91 99999 99999</p>
//                 <p className="flex items-center gap-3"><MapPin size={16} className="text-blue-500" /> Surat, India</p>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xs font-black uppercase text-gray-500 mb-4 tracking-widest">Tech Stack</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3 font-bold"><Code2 className="text-blue-500"/> React</div>
//                 <div className="flex items-center gap-3 font-bold"><Zap className="text-yellow-500"/> GSAP</div>
//                 <div className="flex items-center gap-3 font-bold"><Box className="text-purple-500"/> Three.js</div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="md:col-span-2 space-y-10">
//             <h3 className="text-xs font-black uppercase text-gray-500 mb-4 tracking-widest flex items-center gap-2"><Briefcase size={16}/> Professional Experience</h3>
//             <div className="space-y-8">
//               <div>
//                 <h4 className="text-xl font-bold italic">Frontend Developer / Tech Solutions</h4>
//                 <p className="text-blue-500 font-bold text-xs uppercase mb-2">2024 - PRESENT</p>
//                 <p className="text-gray-400 text-sm">Developed high-performance web applications using React and implemented complex 3D animations.</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold italic">Web Designer / Creative Agency</h4>
//                 <p className="text-blue-500 font-bold text-xs uppercase mb-2">2022 - 2024</p>
//                 <p className="text-gray-400 text-sm">Focused on user-centric interfaces and optimized site performance for faster load times.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Resume;



import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Code2, Zap, Box } from 'lucide-react';

// I have commented out the import to prevent the "File Not Found" crash.
// Once you verify the path is 100% correct, you can uncomment it.
// import myimg from '../assets/myimg.png'; 

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/fenil-patel-resume.pdf';
    link.download = 'Fenil_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="bg-black min-h-screen py-10 px-4 md:px-20 text-white font-sans">
      <div className="max-w-5xl mx-auto bg-[#0a0a0a] border border-white/10 p-10 md:p-16 shadow-2xl">
        
        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8">
          <div className="flex items-center gap-8">
            {/* Fallback to a placeholder URL if the image variable is missing */}
            <img 
              src="https://ui-avatars.com/api/?name=Fenil+Patel&size=150" 
              className="w-32 h-32 rounded-full border-2 border-white object-cover" 
              alt="Profile" 
            />
            <div>
              <h1 className="text-5xl font-black uppercase italic tracking-tighter">FENIL PATEL</h1>
              <p className="text-blue-500 font-bold tracking-widest uppercase">Frontend Engineer</p>
            </div>
          </div>
          <button onClick={handleDownload} className="mt-6 md:mt-0 bg-white text-black px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition-all font-bold uppercase text-xs">
            Download PDF
          </button>
        </div>

        {/* MAIN BODY GRID */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-black uppercase text-gray-500 mb-4 tracking-widest">Contact</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-3"><Mail size={16} className="text-red-500" /> fenil@email.com</p>
                <p className="flex items-center gap-3"><Phone size={16} className="text-green-500" /> +91 99999 99999</p>
                <p className="flex items-center gap-3"><MapPin size={16} className="text-blue-500" /> Surat, India</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase text-gray-500 mb-4 tracking-widest">Tech Stack</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-bold"><Code2 className="text-blue-500"/> React</div>
                <div className="flex items-center gap-3 font-bold"><Zap className="text-yellow-500"/> GSAP</div>
                <div className="flex items-center gap-3 font-bold"><Box className="text-purple-500"/> Three.js</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-10">
            <h3 className="text-xs font-black uppercase text-gray-500 mb-4 tracking-widest flex items-center gap-2"><Briefcase size={16}/> Professional Experience</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold italic">Frontend Developer / Tech Solutions</h4>
                <p className="text-blue-500 font-bold text-xs uppercase mb-2">2024 - PRESENT</p>
                <p className="text-gray-400 text-sm">Developed high-performance web applications using React.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;