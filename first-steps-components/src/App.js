import School from "./components/School"
import Header from "./components/Header"

function App() {
  return (
    <section className="container">
      <Header />
      <main className="row">
        <div className="col-md-6">
          <School name="Alyra" link="https://alyra.fr">
            <p>
              Une école au coeur de <b>la blockchain.</b> Fondée par des
              passionnés et ouverte à toutes et tous.
            </p>
          </School>
        </div>
        <div className="col-md-6">
          <School name="Simplon" link="https://simplon.co">
            <p>
              Un réseau de Fabriques <b>solidaires et inclusives</b> qui
              proposent des formations gratuites aux métiers techniques du
              numérique.
            </p>
          </School>
        </div>
      </main>
    </section>
  )
}

export default App
