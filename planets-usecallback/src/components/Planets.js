import { useEffect } from "react"
import Planet from "./Planet"

const Planets = ({ planets, initFetch, fetchData }) => {
  useEffect(() => {
    initFetch()
    fetchData()
  }, [initFetch, fetchData])
  return (
    <>
      <div className="row">
        {planets.map((planet) => {
          return <Planet key={planet.name} planet={planet} />
        })}
      </div>
    </>
  )
}

export default Planets
