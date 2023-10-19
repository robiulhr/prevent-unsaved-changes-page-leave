// FormPrompt.js

import { useNavigate } from 'react-router-dom'
import usePrompt from '../hooks/usePrompt'

function FormPrompt ({ isDirty }) {
  const navigate = useNavigate()
  const currentRoute = window.location.pathname
  const popStateHandler = function (event) {
    event.preventDefault()
    // The popstate event is fired each time when the current history entry changes.
    const confirmValue = confirm('You pressed a Back button! Are you sure?!')
    if (confirmValue === true) {
      navigate(window.location.pathname)
      prevPopStateHandler.current &&
        window.removeEventListener('popstate', prevPopStateHandler.current)
    } else {
      // Stay on the current page.
      navigate(currentRoute)
    }
  }
  usePrompt(isDirty, popStateHandler)
  useBeforeUnload(
    useCallback(
      event => {
        if (isDirty) {
          event.preventDefault()
          event.returnValue = ''
        }
      },
      [isDirty]
    ),
    { capture: true }
  )
}
