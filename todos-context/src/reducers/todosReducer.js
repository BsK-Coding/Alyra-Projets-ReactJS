/* USEREDUCER https://fr.reactjs.org/docs/hooks-reference.html#usereducer */
//Evite les répétitions de usetates dans les components et d'utiliser les props,
//uniquement dans les components ou cela est nécessaire 

export const todosReducer = (state, action) => {
  // ADD, DELETE, TOGGLE
  switch (action.type) {

    case "DARKMODE":
      return

    case "ADD":
      // setTodos([...todos, newTodo])
      return [...state, action.payload];

    case "DELETE":
      // setTodos(todos.filter((el) => el.id !== task.id))
      return state.filter((el) => el.id !== action.payload.id);

    case "TOGGLE":
      // setTodos(
      //   todos.map((el) => {
      //     if (el.id === task.id) {
      //       return {
      //         ...el,
      //         isCompleted: !el.isCompleted
      //       }
      //     }
      //     return el
      //   })
      // )
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted
          };
        }
        return el;
      });

    default:
      throw new Error(
        `Unsupported action type ${action.type} for todosReducer`
      );

  }

};