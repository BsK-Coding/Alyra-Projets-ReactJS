import { createContext, useContext, useMemo } from "react"
import { useCurrencies } from "../hooks/useCurrencies"

export const CurrenciesContext = createContext()

export const CurrenciesContextProvider = ({ children }) => {
  const { error, loading, currencies } = useCurrencies()
  const value = useMemo(() => ({ error, loading, currencies }), [
    error,
    loading,
    currencies,
  ])
  return (
    <CurrenciesContext.Provider value={value}>
      {children}
    </CurrenciesContext.Provider>
  )
}

export const useCurrenciesContext = () => {
  const context = useContext(CurrenciesContext)
  if (context === "undefined") {
    throw new Error(
      "useActive should not be used outside the CurrenciesContextProvider"
    )
  }

  return context
}