import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-50 bg-[#020202] border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Section 1: Branding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter text-white">FENIL <span className="text-cyan-500">PATEL</span></h2>
          <p className="text-white/40 text-sm">Full-Stack Developer crafting immersive digital experiences.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-cyan-500 hover:text-white transition-colors mx-auto md:mx-0"
          >
            <ChevronUp size={14} /> BACK TO TOP
          </button>
        </div>

        {/* Section 2: Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/About' },
            { name: 'Projects', path: '/projects' },
            { name: 'Education', path: '/Education' },
            { name: 'Skills', path: '/Skills' },
            { name: 'Contact', path: '/contact' }
          ].map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-white/60 hover:text-cyan-500 transition-all text-sm uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Section 3: Connect */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://github.com/fenil313" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-500"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/fenil-patel-96015124a/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-500"><Linkedin size={20} /></a>
            <a href="mailto:fenilpatel0301@gmail.com" className="text-white/40 hover:text-cyan-500"><Mail size={20} /></a>
          </div>
       
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-white/20 uppercase tracking-widest">
        © {currentYear} Fenil Patel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;