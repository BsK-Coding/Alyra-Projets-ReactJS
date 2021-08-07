import GradientTagButton from "./GradientTagButton"

// const GradientTags = ({ tags, filter, setFilter }) => {
const GradientTags = ({ tags }) => {
  return (
    <div className="mt-3">
      {tags.sort().map((el) => {
        return (
          <GradientTagButton
            key={el}
            tag={el}
          // filter={filter}
          // setFilter={setFilter}
          />
        )
      })}
    </div>
  )
}

export default GradientTags
