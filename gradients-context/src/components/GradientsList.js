import { useContext } from "react"
import { FilterContext } from "./../context/FilterContext"
import Gradient from "./Gradient"
import { gradients } from "../gradients"

const GradientsList = (props) => {
  //Decomposition 1/2/3
  // 1/ const { filter, setFilter } = props

  // 2/ const context = useContext(FilterContext)
  // 2/ const { filter } = props

  // 3
  const { filter } = useContext(FilterContext)

  const list = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end, tags = [] } = el
        return (
          <Gradient
            key={name}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
          // filter={filter}
          // setFilter={setFilter}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList
