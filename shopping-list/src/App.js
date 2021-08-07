//import logo from './logo.svg';
//import './App.css';
import Header from "./components/Header"
import ShoppingApp from "./components/ShoppingApp"

function App() {
  // les balises <Header />, <ShoppingApp />, <ShoppingList /> font référence aux CLASS des components du même nom via leurs fichiers Header.js, etcc...
  return (
    <div className="container">
      <Header />
      <ShoppingApp />
    </div>
  );
}

export default App;
