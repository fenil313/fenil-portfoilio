import React from 'react';
import { ArrowRight, FileText, Lock } from 'lucide-react';

const ResumePage = () => {
  return (
    <main className="bg-[#020202] min-h-screen text-white pt-24 pb-20 px-6">
      
      {/* Centered Document Focus Area */}
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
        
       

        {/* Title Block */}
        <h1 className="text-[clamp(3rem,8vw,3.2rem)] font-black italic tracking-tighter leading-none mb-12">RESUME.</h1>

        {/* Document Card */}
        <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <FileText size={120} />
          </div>
          
          <h2 className="text-xl font-bold mb-4">Professional Overview</h2>
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md mx-auto">
             That's my cv is upload in drive click here button to watch 
             it
          </p>

         
          {/* Download Action */}
          <a 
            href="https://drive.google.com/file/d/1E4JQLzcI7u1Sqq6YefDm3J48Us6QYtP6/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all duration-300"
          >
            Download Resume <ArrowRight size={18} />
          </a>
        </div>

      
      </div>
    </main>
  );
};

export default ResumePage;