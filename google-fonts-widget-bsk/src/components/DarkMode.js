import { useEffect, useState } from "react"

const DarkMode = ({ children }) => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)
  const modeClasses = dark ? "bg-black text-white" : "bg-light";

  const handleDarkMode = () => {
    setDark(!dark)
  }

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={modeClasses}>
      <div className="form-check form-switch">
        <input onChange={handleDarkMode} className="form-check-input" type="checkbox" id="activate" checked={dark} />
        <label className="form-check-label" htmlFor="activate"> Mode Dark </label>
      </div>
      {children}
    </div>

  )
}

export default DarkMode