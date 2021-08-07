import Todo from "./Todo"

const TodosList = (props) => {
  // const { todos, deleteTodo, toggleCompleteTodo } = props
  const { todos } = props
  return todos.map((el) => {
    return (
      <Todo
        key={el.id}
        todo={el}
      // deleteTodo={deleteTodo}
      // toggleCompleteTodo={toggleCompleteTodo}
      />
    )
  })
}

export default TodosList
