import WeatherApp from "./components/WeatherApp"
import { useState, useEffect } from "react"
import CityForm from "./components/CityForm"

function App() {
  const getTheme = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches

  const [darkMode, setDarkMode] = useState(getTheme)
  // On déclare, afin que App.js puisse accéder au datas de WeatherApp.js & CityForm.js, indiqué dans le champ "ville" des fichiers
  const [city, setCity] = useState("Paris")

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-theme')
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
      document.body.classList.add('light-theme')
    }
  }, [darkMode])

  return (
    <div className="container min-vh-100">
      <h1 className="display-3 text-center mb-4">Météo Actuelle</h1>
      <WeatherApp city={city} />
      <CityForm setCity={setCity} darkMode={darkMode} />
      <div className="form-check form-switch mt-3 d-flex justify-content-end">
        <label className="form-check-label" htmlFor="activate"> Mode Sombre </label>
        <input className="form-check-input ms-2 mb-3" type="checkbox" id="activate" checked={darkMode} onChange={() => setDarkMode((darkMode) => !darkMode)} />
      </div>
    </div>
  )
}

export default App
