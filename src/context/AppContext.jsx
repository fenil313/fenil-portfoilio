import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading, theme, toggleTheme, navOpen, toggleNav }}>
      {children}
    </AppContext.Provider>
  );
};