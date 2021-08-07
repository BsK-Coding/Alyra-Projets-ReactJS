import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import { planetColor } from './style'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'

// fonction du Reducer
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoadding: true,
        isError: false
      }
    case 'FETCH_SUCCESS':
      // agrandissement de la liste
      let list = []
      for (let elem of action.myData) {
        list.push(elem)
      }
      for (let elem of action.payload.results) {
        list.push(elem)
      }
      // Problème de l'url http => https
      let url
      if (action.payload.next !== null) {
        url = action.payload.next.split('')
        url[3] = 'ps'
        url = url.join('')
      } else {
        url = action.payload.next
      }
      return { ...state, isLoadding: false, planetsList: list, nextUrl: url }
    case 'FETCH_FAILURE':
      return { ...state, isError: true }
    case 'FETCH_END':
      return { ...state, isLoadding: false }
    default:
      throw new Error()
  }
}

// Custom Hook
const useDataFetcherReducer = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/planets/')

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoadding: false,
    isError: false,
    nextUrl: '',
    planetsList: []
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        let data = await axios(url)
        dispatch({ type: 'FETCH_SUCCESS', payload: data.data, myData: state.planetsList })
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' })
      }
      dispatch({ type: 'FETCH_END' })
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
  return [state, setUrl]
}


// App
const App = () => {
  const [state, doFetch] = useDataFetcherReducer()
  const { nextUrl, planetsList, isLoadding, isError } = state
  // Fonction bouton Plus
  const handleButtonMore = () => {
    doFetch(nextUrl)
  }
  // ICI tout est rassemblé dans le App.js
  return (
    <div className="App">
      <h1 className="display-1 text-center my-5">Les planètes de Star Wars</h1>
      <div className="container">
        <div>
          {isError && <h2 className="infos">Oups... Il y a eu une erreur</h2>}
          < div className="d-flex flex-wrap" >
            {planetsList.map((elem) => {
              return <div key={elem.name} className="card mb-2 me-2" style={{ width: "200px", backgroundColor: "#AA6688" }}>
                <div className="card-body">
                  <h2 className="card-title">{elem.name}</h2>
                  <p className="card-subtitle">Diamètre : {elem.diameter}</p>
                  <div
                    className="card-gradient rounded-pill d-flex mt-3 mx-auto" style={{ height: "3rem", width: "3rem", backgroundImage: planetColor(elem.terrain.split(',')[0]) }}
                  ></div>
                </div>
              </div>
            })}
          </div >
          {isLoadding ? <h2 className="infos">Chargement...</h2> : ''}
        </div>
        <button disabled={nextUrl === null} onClick={handleButtonMore} className="btn btn-info my-5 me-2">{nextUrl !== null ? "Voir plus" : "Fin de la liste"}</button>
      </div>
    </div>
  )
}

export default App