import { v4 as uuidv4 } from "uuid"
import { useDarkMode } from "../context/DarkModeContext"
import { useTodosDispatch } from "../context/TodosDispatchContext"

const AddTodoForm = () => {
  const darkMode = useDarkMode()
  const dispatch = useTodosDispatch()
  const darkModeClass = darkMode ? "text-white bg-dark" : ""

  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    dispatch({ type: "ADD", payload: newTodo })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newTodoText = event.target.elements.todo.value
    addTodo(newTodoText)
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
