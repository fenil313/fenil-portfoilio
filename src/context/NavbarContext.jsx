import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  
  const pages = [
     { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Education", path: "/Education" },
    { name: "Projects", path: "/Projects" },
    // { name: "Experience", path: "/Experience" },
    { name: "Skills", path: "/Skills" },
    { name: "Resume", path: "/Resume" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <NavbarContext.Provider value={{ isMenuOpen, setIsMenuOpen, toggleMenu, pages }}>
      {children}
    </NavbarContext.Provider>
  );
};