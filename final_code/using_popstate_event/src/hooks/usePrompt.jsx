import { useEffect,useRef } from "react"

function usePrompt ( dirty, popStateHandler) {
  const prevPopStateHandler = useRef()
  useEffect(() => {
    if (dirty) {
      prevPopStateHandler.current &&
        window.removeEventListener('popstate', prevPopStateHandler.current)
      prevPopStateHandler.current = popStateHandler.bind(null, prevPopStateHandler)
      window.addEventListener('popstate', prevPopStateHandler.current, false)
    } else {
      prevPopStateHandler.current &&
        window.removeEventListener('popstate', prevPopStateHandler.current)
    }
  }, [dirty])
}

export default usePrompt
