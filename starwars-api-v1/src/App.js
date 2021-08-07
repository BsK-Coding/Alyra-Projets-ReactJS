import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react'

// Import Components
import StarWarsApp from './components/StarWarsApp'


const App = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/planets/')
  const [nextUrl, setNextUrl] = useState('')

  const handleButtonMore = () => {
    setUrl(nextUrl)
  }

  return (
    <div className="App">
      <h1 className="display-1 text-center my-5">Les planètes de Star Wars</h1>
      <div className="container">
        <StarWarsApp setNextUrl={setNextUrl} url={url} />
        <button disabled={nextUrl === null} onClick={handleButtonMore} className="btn btn-info my-5 me-2">{nextUrl !== null ? "Voir plus" : "Fin de la liste"}</button>
      </div>
    </div>
  )
}

export default App