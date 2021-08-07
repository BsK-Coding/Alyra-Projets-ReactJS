import "bootstrap/dist/css/bootstrap.css"
import DarkMode from "./components/DarkMode"
import { useEffect, useState } from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)

  const handleDarkMode = () => {
    setDark(!dark)
  }

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark))
  }, [dark])

  return (
    <div className="App">
      <Header dark={dark} handleDarkMode={handleDarkMode} />
      <DarkMode dark={dark}>
        <Main />
      </DarkMode>
      <Footer />
    </div>
  );
}

export default App;