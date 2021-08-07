import { createContext, useContext } from "react"
import { useEffect, useState } from "react"

export const DarkModeContext = createContext()

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error(
      `You should use useDarkMode only within the DarkModeContext.Provider`
    )
  }
  return context
}

export const Darkmode = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
  )

  useEffect(() => {
    localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
  }, [darkMode])

  const modeClass = darkMode ? "bg-dark text-white" : ""

  return (
    <div className={`${modeClass} min-vh-100`}>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        {children}
      </DarkModeContext.Provider>
    </div>
  )
}
