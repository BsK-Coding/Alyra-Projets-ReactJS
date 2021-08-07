import { useDarkMode } from "../context/DarkModeContext"
import { useTodosDispatch } from "../context/TodosDispatchContext"
import { useIsMounted } from "../hooks/useIsMounted"

const AddTodoForm = () => {
  const darkMode = useDarkMode()
  const dispatch = useTodosDispatch()
  const darkModeClass = darkMode ? "text-white bg-dark" : ""
  const isMounted = useIsMounted()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newTodoText = event.target.elements.todo.value
    dispatch({ type: "FETCH_INIT" })
    fetch(`${process.env.REACT_APP_API_URL}/todos`, {
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
        <label className={`input-group-text ${darkModeClass}`} htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className={`form-control ${darkModeClass}`} id="todo" required />
      </div>
      <button type="submit" className="btn btn-primary">
        allons-y !
      </button>
    </form>
  )
}

export default AddTodoForm
