import { useState } from "react"
import List from "./components/List"
import { CurrenciesContextProvider } from "./context/CurrenciesContext"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <CurrenciesContextProvider>
      <div className="App">
        <header className="App-header text-center bg-dark text-white p-5">
          <h1>
            Crypto Currencies with{" "}
            <a className="text-reset" href="https://nomics.com/docs/">
              nomics API
            </a>
          </h1>
        </header>
        <div className={darkMode ? "bg-dark text-light" : ""}>
          <button onClick={() => setDarkMode(!darkMode)}>DarkMode</button>
          <List />
        </div>
      </div>
    </CurrenciesContextProvider>
  )
}

export default App
