import { createContext, useContext, useState } from "react"

export const FilterContext = createContext()

export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all")
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use FilterContext outside of its provider`
    )
  }
  return context
}