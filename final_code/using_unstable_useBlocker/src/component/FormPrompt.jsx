import { useCallback } from 'react'

import { useBeforeUnload } from 'react-router-dom'
import usePrompt from '../hooks/usePrompt'

const stepLinks = ['/contact', '/education', '/about', '/confirm']

const FormPrompt = ({ hasUnsavedChanges }) => {
  const onLocationChange = useCallback(
    ({ nextLocation }) => {
      if (!stepLinks.includes(nextLocation.pathname) && hasUnsavedChanges) {
        return !window.confirm(
          'You have unsaved changes, are you sure you want to leave?'
        )
      }
      return false
    },
    [hasUnsavedChanges]
  )

  usePrompt(onLocationChange, hasUnsavedChanges)
  useBeforeUnload(
    useCallback(
      event => {
        if (hasUnsavedChanges) {
          event.preventDefault()
          event.returnValue = ''
        }
      },
      [hasUnsavedChanges]
    ),
    { capture: true }
  )

  return null
}

export default FormPrompt
