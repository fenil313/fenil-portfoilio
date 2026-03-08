import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <AppContext.Provider value={{ theme, toggleTheme, isMenuOpen, toggleMenu, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => useContext(AppContext);