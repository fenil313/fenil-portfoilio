import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../context/NavbarContext";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { isMenuOpen, toggleMenu, pages } = useContext(NavbarContext);

  return (
    <>
      {/* FIX: Reduced 'py-8' to 'py-5' for a thinner, modern look.
         'h-14' ensures a consistent, compact height across all devices.
      */}
      <nav className="fixed w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center text-white bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        
        {/* Brand Mark: Reduced text and spacing for a sleeker look */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border border-white/30 flex items-center justify-center text-[9px] tracking-widest font-mono">FP</div>
          <span className="text-[9px] font-light tracking-[0.15em] uppercase opacity-80">Fenil Patel</span>
        </div>

        {/* Desktop Links: Slightly smaller text for a high-end minimalist feel */}
        <div className="hidden lg:flex gap-8 font-light text-[9px] uppercase tracking-[0.3em] text-white/60">
          {pages.map((p) => (
            <Link key={p.name} to={p.path} className="group relative transition-all duration-300">
              <span className="group-hover:text-white transition-colors">{p.name}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* Burger Button: Adjusted for a cleaner, thinner look */}
        <button onClick={toggleMenu} className="lg:hidden flex flex-col gap-1.5 p-1">
          <span className={`w-5 h-[0.5px] bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-5 h-[0.5px] bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-[0.5px] bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-slate-950 flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {pages.map((p, i) => (
              <motion.div key={p.name} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
                <Link to={p.path} onClick={toggleMenu} className="text-2xl font-light tracking-tight hover:italic transition-all">
                  {p.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};