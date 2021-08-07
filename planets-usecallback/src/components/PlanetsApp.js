import { useReducer, useState, useCallback } from "react"

import Planets from "./Planets"
import { reducer } from "../reducers"

const PlanetsApp = () => {
  const initialState = {
    planets: [],
    loading: false,
    error: ""
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [active, setActive] = useState(false)
  const { planets, loading, error } = state

  // const initFetch = () => dispatch({ type: "FETCH_INIT" })
  // const fetchPlanets = () => {

  const initFetch = useCallback(() => dispatch({ type: "FETCH_INIT" }), [])
  const fetchPlanets = useCallback(() => {
    fetch(`https://swapi.dev/api/planets/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu lire le registre des planètes, status : ${response.status}`
          )
        }
        return response.json()
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data.results })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message })
      })
  }, [])

  return (
    <>
      {!active && (
        <button className="btn btn-dark" onClick={() => setActive(true)}>
          Afficher des planètes
        </button>
      )}
      {active && (
        <Planets
          planets={planets}
          initFetch={initFetch}
          fetchData={fetchPlanets}
        />
      )}
      {loading && <p className="text-center">loading...</p>}
      {!!error && <p className="alert alert-danger">{error}</p>}
    </>
  )
}

export default PlanetsApp
