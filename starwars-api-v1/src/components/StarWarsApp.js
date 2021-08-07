import { useState, useEffect } from 'react'
import axios from 'axios'
import { planetColor } from '../style'

const StarWarsApp = ({ url, setNextUrl }) => {
  // variable d'état
  const [planetsList, setplanetsList] = useState([])
  const [isLoadding, setIsLoadding] = useState(false)
  const [isError, setIsError] = useState(false)

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoadding(true)
      setIsError(false)
      try {
        let data = await axios(url)
        setIsLoadding(false)
        // agrandir la liste
        for (let elem of data.data.results) {
          planetsList.push(elem)
        }
        // Problème de l'url http => https
        let urlNext
        if (data.data.next !== null) {
          urlNext = data.next.split('')
          urlNext[3] = 'ps'
          urlNext = urlNext.join('')
        } else {
          urlNext = data.data.next
        }

        // modification des variables d'état
        setplanetsList(() => planetsList)
        setNextUrl(() => urlNext)
      } catch {
        setIsError(true)
      }
      setIsLoadding(false)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])


  return (<div>
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
  )
}

export default StarWarsApp