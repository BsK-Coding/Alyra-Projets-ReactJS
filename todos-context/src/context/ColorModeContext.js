import { createContext, useContext } from "react";
import { useState, useEffect } from "react"

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
  );

  useEffect(() => {
    localStorage.setItem("my-dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const modeClass = darkMode ? "bg-dark text-white" : "";

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, modeClass }}>
      <div className={`${modeClass} min-vh-100`}>
        {children}
      </div>

    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {


  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("You should use useColormode only within the ColorModeContext.Provider");
  }
  return (context);
};