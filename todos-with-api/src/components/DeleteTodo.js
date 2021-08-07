import { useTodosDispatch } from "../context/TodosDispatchContext"

const DeleteTodo = ({ todo }) => {
  const dispatch = useTodosDispatch()
  const deleteTodo = () => {
    dispatch({ type: "DELETE", payload: todo })
  }
  return (
    <button
      className="btn btn-danger btn-sm"
      type="button"
      onClick={deleteTodo}
    >
      Supprimer
    </button>
  )
}

export default DeleteTodo
