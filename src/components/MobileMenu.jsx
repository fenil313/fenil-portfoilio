import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../context/NavContext";

export const Navbar = () => {
  const { isOpen, setIsOpen, links } = useContext(NavContext);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50">
      <div className="backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/10 rounded-full py-3 px-6 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        
        <h1 className="text-md font-bold font-mono tracking-tighter">FENIL<span className="text-indigo-500">.</span></h1>

        {/* Mobile Toggle Button - Visible only on small screens */}
        <button 
          className="md:hidden font-mono text-[10px] border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-all uppercase tracking-widest"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "EXIT" : "MENU"}
        </button>
      </div>
    </nav>
  );
};