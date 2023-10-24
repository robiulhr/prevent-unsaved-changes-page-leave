import { createContext, useState } from 'react'

export const PopstateContext = createContext(null)

export default function PopstateProvider ({ children }) {
  const [prevPopStateHandler, setPrevPopStateHandler] = useState(null)
  return (
    <PopstateContext.Provider
      value={{prevPopStateHandler, setPrevPopStateHandler}}
    >
      {children}
    </PopstateContext.Provider>
  )
}
