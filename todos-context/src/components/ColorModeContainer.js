// import { useEffect, useState } from "react"
import ColorModeSwitcher from "./ColorModeSwitcher";
import { DarkModeProvider } from "../context/ColorModeContext";

const ColorModeContainer = ({ children }) => {

  /* Deplacer dans ColorModeContext.js */
  // const [darkMode, setDarkMode] = useState(
  //   () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
  // )

  // useEffect(() => {
  //   localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
  // }, [darkMode])

  // const modeClass = darkMode ? "bg-dark text-white" : ""

  return (
    /* Deplacer dans ColorModeContext.js */
    // <DarkModeContext.Provider value={{ darkmode, setDarkMode, modeClass }}>
    <DarkModeProvider>
      {/* <div className={`${modeClass} min-vh-100`}> */}
      {/* <ColorModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <ColorModeSwitcher />
      {children}
      {/* </div> */}
    </DarkModeProvider>
  );
};

export default ColorModeContainer
