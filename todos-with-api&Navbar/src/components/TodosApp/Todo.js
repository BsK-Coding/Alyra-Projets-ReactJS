import DeleteTodo from "./DeleteTodo"
import ToggleTodo from "./ToggleTodo"
const Todo = ({ todo }) => {
  const style = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
  }

  return (
    <div className="shadow-sm border p-2 d-flex align-items-center justify-content-between mb-2">
      <span style={style}>{todo.text}</span>
      <div className="btn-group">
        <ToggleTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  )
}

export default Todo