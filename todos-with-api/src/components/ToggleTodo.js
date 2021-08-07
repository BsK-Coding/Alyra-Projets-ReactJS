import { useTodosDispatch } from "../context/TodosDispatchContext"

const ToggleTodo = ({ todo }) => {
  const dispatch = useTodosDispatch()

  const toggleCompleteTodo = () => {
    dispatch({ type: "TOGGLE", payload: todo })
  }
  return (
    <button
      className={`btn btn-sm ${todo.isCompleted ? "btn-dark" : "btn-light"}`}
      type="button"
      onClick={toggleCompleteTodo}
    >
      {todo.isCompleted ? "Rétablir" : "Terminer"}
    </button>
  )
}

export default ToggleTodo
