import { useDarkMode } from "../../context/DarkModeContext"
import { useTodosDispatch } from "../../context/TodosDispatchContext"
import { useIsMounted } from "../../hooks/useIsMounted"

const AddTodoForm = () => {
  const darkMode = useDarkMode()
  const dispatch = useTodosDispatch()
  
  const isMounted = useIsMounted()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newTodoText = event.target.elements.todo.value
    fetch(`http://${process.env.REACT_APP_API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodoText,
        isCompleted: false,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.textStatus}`)
        }
        return response.json()
      })
      .then((result) => {
        if (isMounted.current) {
          dispatch({ type: "ADD", payload: result })
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message })
        }
      })
    event.target.reset()
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className={`input-group-text ${darkMode ? "bg-danger text-white" : "bg-warning"}`} htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className={`form-control`} id="todo" required />
      </div>
      <button type="submit" className="btn btn-primary">
        allons-y !
      </button>
    </form>
  )
}

export default AddTodoForm