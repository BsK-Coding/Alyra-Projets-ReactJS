import { uniqueTags as tags } from "../gradients"
// import { useContext } from "react"
// import { FilterContext } from "./../context/FilterContext"
/* useFilter remplace useContext et FilterContext */
import { useFilter } from "./../context/FilterContext"

// const GradientsSelect = (props) => {
const GradientsSelect = () => {
  //decomposition 1/2/3
  // 1/ const { filter, setFilter } = props
  // 2/ const { filter, setFilter } = useContext(FilterContext)
  // 3/
  const { filter, setFilter } = useFilter()

  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">Tous</option>
        {tags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
