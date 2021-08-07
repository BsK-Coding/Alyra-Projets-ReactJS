export const todosReducer = (state, action) => {
  // ADD, DELETE, TOGGLE
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]
    case "DELETE":
      return state.filter((el) => el.id !== action.payload.id)
    case "TOGGLE":
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          }
        }
        return el
      })
    default:
      throw new Error(`Unsupported action type ${action.type} in todosReducer`)
  }
}
