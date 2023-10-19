import { useRef } from 'react'

function usePrompt ({ isDirty, popStateHandler }) {
  const prevPopStateHandler = useRef()
  useEffect(() => {
    if (isDirty) {
      prevPopStateHandler.current &&
        window.removeEventListener('popstate', prevPopStateHandler.current)
      prevPopStateHandler.current = popStateHandler
      window.addEventListener('popstate', popStateHandler, false)
    } else {
      prevPopStateHandler.current &&
        window.removeEventListener('popstate', prevPopStateHandler.current)
    }
  }, [isDirty])
}

export default usePrompt;