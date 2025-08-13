/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});



export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.body.style.backgroundColor = darkMode ? "#0f0f0f" : "#fff";
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => setDarkMode(!darkMode) }}>
      {children}
    </ThemeContext.Provider>
  );
}
