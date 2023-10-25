import { createContext, useRef } from 'react'

export const NavigationRef = createContext(null)

export default function NavigationRefProvider ({ children }) {
  const unblockNavigationRef = useRef(null)
  const blockHandlerRef = useRef(null)
  return (
    <NavigationRef.Provider value={{unblockNavigationRef,blockHandlerRef}}>
      {children}
    </NavigationRef.Provider>
  )
}
