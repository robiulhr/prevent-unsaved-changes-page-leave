// FormPrompt.js
import { useNavigate, useBeforeUnload } from 'react-router-dom'
import { useCallback } from 'react'
import usePrompt from '../hooks/usePrompt'
export default function FormPrompt ({ dirty }) {
  const navigate = useNavigate()
  const currentRoute = window.location.pathname
  const locationChangeHandler = function (unblockNavigationRef, transition) {
    if (transition.action === 'POP') {
      const confirmValue = confirm('are you sure?')
      if (confirmValue) {
        unblockNavigationRef.current?.()
        return true
      } else {
        navigate(currentRoute)
        return false
      }
    }
  }
  usePrompt(dirty, locationChangeHandler)
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
