import { createBrowserHistory } from 'history'
import { useRef, useEffect } from 'react'

export default function usePrompt (dirty, locationChangeHandler) {
  const history = createBrowserHistory()
  const unblockNavigationRef = useRef()
  useEffect(() => {
    if (dirty) {
      unblockNavigationRef.current?.()
      unblockNavigationRef.current = history.listen(
        locationChangeHandler.bind(null, unblockNavigationRef)
      )
    } else {
      unblockNavigationRef.current?.()
    }
  }, [dirty, history])
}
