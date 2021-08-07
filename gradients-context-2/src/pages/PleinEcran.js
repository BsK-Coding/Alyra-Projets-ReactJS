import {useGradients} from "../context/GradientsContext"
import {useParams, Link} from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"


const PleinEcran = ()=>{

const {gradients} = useGradients()

const {id} = useParams()

const [count,setcount] = useState(id)

const handleClickNext = () =>{ 
  count < (gradients.length) ? setcount(Number(count)+1) : setcount(gradients.length)
}
const handleClickPrev = () =>{ 
  count > 0 ? setcount(Number(count) - 1) : setcount(1)
}
  return (
    <>
    <div className="App min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex" style = {{
    backgroundImage: `linear-gradient(to right, ${gradients[count-1]?.start}, ${gradients[count-1]?.end})`
  }}>

        <nav className="fixed-top nav">
          <li className="nav-item">
            <Link className="btn btn-dark text-white nav-link me-2" to ="/">Tous</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-dark text-white nav-link me-2" to ={`/gradient/${count}`} onClick={handleClickPrev}>Précédent</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-dark text-white nav-link" to ={`/gradient/${count}`} onClick={handleClickNext}>Suivant</Link>
          </li>
        </nav>     
        <div className="m-auto text-center">
          <h1 className="text-white display-1">{gradients[count-1]?.name}</h1>
          <div className="bg-white shadow p-2 rounded">
            <code>{`backgroundImage: linear-gradient(to right, ${gradients[count-1]?.start}, ${gradients[count-1]?.end}`};</code>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
export default PleinEcran