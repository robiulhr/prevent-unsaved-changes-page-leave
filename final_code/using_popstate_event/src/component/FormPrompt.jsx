// FormPrompt.js
import { useCallback } from 'react'
import { useNavigate, useBeforeUnload } from 'react-router-dom'
import usePrompt from '../hooks/usePrompt'

export default function FormPrompt ({ dirty }) {
  const navigate = useNavigate()
  const currentRoute = window.location.pathname
  const popStateHandler = function (prevPopStateHandler, event) {
    event.preventDefault()
    // The popstate event is fired each time when the current history entry changes.
    const confirmValue = confirm('You pressed a Back button! Are you sure?!')
    if (confirmValue === true) {
      prevPopStateHandler.current &&
        window.removeEventListener('popstate', prevPopStateHandler.current)
        return true
    } else {
      // Stay on the current page.
      navigate(currentRoute)
      return false
    }
  }
  usePrompt(dirty, popStateHandler)
  useBeforeUnload(
    useCallback(
      event => {
        if (dirty) {
          event.preventDefault()
          event.returnValue = ''
        }
      },
      [dirty]
    ),
    { capture: true }
  )
  return null
}
