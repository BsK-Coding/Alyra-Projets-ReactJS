import { createContext, useContext } from "react"

export const TodosDispatchContext = createContext()

export const useTodosDispatch = () => {
  const context = useContext(TodosDispatchContext)
  if (context === undefined) {
    throw new Error(
      `You should use useTodosDispatch only within the TodosDispatchContext.Provider`
    )
  }
  return context
}
