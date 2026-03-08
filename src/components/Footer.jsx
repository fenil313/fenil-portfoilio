import React from 'react';

const Footer = () => (
  <footer className="w-full py-10 px-10 border-t border-white/5 bg-[#050505] flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.4em]">
      © 2026 Fenil Patel // Built with React & Logic
    </div>
    
    <div className="flex gap-8 font-mono text-[9px] text-zinc-500 uppercase tracking-widest italic">
      <span>Ahmedabad, Gujarat</span>
      <span className="text-indigo-500 animate-pulse">System_Status: Optimal</span>
    </div>
  </footer>
);

export default Footer;