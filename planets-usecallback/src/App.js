import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"
import PlanetsApp from "./components/PlanetsApp"
import Header from "./components/Header"

export default function App() {
  return (
    <section className="container p-3">
      <Header />
      <PlanetsApp />
    </section>
  )
}
