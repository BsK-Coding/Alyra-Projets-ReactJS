import { useState } from "react"
import DarkMode from "./components/DarkMode"
import Planets from "./components/Planets"

function App() {
  // const App = () => {
  const [active, setActive] = useState(false);
  return (
    <DarkMode>
      <section className="container  p-3">
        <h1>Planètes dans l'univer Star Wars</h1>
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="activate"
            onChange={() => setActive((active) => !active)}
          />
          <label className="form-check-label" htmlFor="activate">
            Activer
          </label>
        </div>
        {active && <Planets />}
      </section>
    </DarkMode>
  );
}

export default App