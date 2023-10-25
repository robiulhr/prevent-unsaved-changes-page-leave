import { createContext, useRef } from 'react'

export const PopstateContext = createContext(null)

export default function PopstateProvider ({ children }) {
  const prevPopStateHandler = useRef(null)
  return (
    <PopstateContext.Provider value={prevPopStateHandler}>
      {children}
    </PopstateContext.Provider>
  )
}
