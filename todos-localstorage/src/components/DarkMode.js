import { useEffect, useState } from "react"

const DarkMode = ({ children }) => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)
  const modeClasses = dark ? "bg-dark text-white min-vh-100" : "bg-light min-vh-100";

  const handleDarkMode = () => {
    setDark(!dark)
  }



  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark))
  }, [dark])

  return (
    <section className={modeClasses}>
      <div className="form-check form-switch">
        <input onChange={handleDarkMode} className="form-check-input" type="checkbox" id="activate" checked={dark} />
        <label className="form-check-label" htmlFor="activate"> Mode Sombre </label>
      </div>
      {children}
    </section>

  )
}

export default DarkMode