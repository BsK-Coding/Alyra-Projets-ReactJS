import "bootstrap/dist/css/bootstrap.css"
import DarkMode from "./components/DarkMode"
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  return (
    <div className="App">
      <Header />
      <DarkMode>
        <Main />
      </DarkMode>
      <Footer />
    </div>
  );
}

export default App;