import { useDarkMode } from "../../context/DarkModeContext"

const ColorModeSwitcher = () => {

  const {darkMode, setDarkMode} = useDarkMode()

  const handleModeChange = () => {
    setDarkMode((mode) => !mode)
  }
  
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="activate"
        onChange={handleModeChange}
        checked={darkMode}
      />
      <label className="form-check-label text-white" htmlFor="activate">
        Dark
      </label>
    </div>
  )
}

export default ColorModeSwitcher
