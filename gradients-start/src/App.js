//import logo from './logo.svg';
import Gradient from "./components/Gradient"
import './App.css';

function App() {
  return (
    <div>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <ul className="row list-unstyled">
          <Gradient
            colorStart="rgb(189, 195, 199)"
            colorEnd="rgb(44, 62, 80)"
            name="Grade Grey"
          />
          <Gradient
            colorStart="rgb(31, 64, 55)"
            colorEnd="rgb(153, 242, 200)"
            name="Harvey"
          />
          <Gradient
            colorStart="rgb(0, 242, 96)"
            colorEnd="rgb(5, 117, 230)"
            name="Rainbow Blue"
          />
          <Gradient
            colorStart="rgb(168, 192, 255)"
            colorEnd="rgb(63, 43, 150)"
            name="Slight Ocean View"
          />
        </ul>
      </main>
    </div>
    /*
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    */
  );
}

export default App;
