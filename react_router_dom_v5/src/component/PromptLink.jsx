import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NavigationPromptLink ({ to, confirmPageLeave }) {
  const history = useHistory()
  const [showPrompt, setShowPrompt] = useState(false)

  const handleLinkClick = e => {
    e.preventDefault()
    setShowPrompt(true)
  }

  const handlePromptConfirm = confirm => {
    if (confirm) {
      // User confirmed, navigate to the desired page
      history.push(to)
    }
    // User chose not to navigate, do nothing or show a message
    setShowPrompt(false)
  }

  return (
    <div>
      <button onClick={handleLinkClick}>Click to Navigate</button>

      {showPrompt && (
        <div>
          <p>{message}</p>
          <button onClick={() => handlePromptConfirm(true)}>Yes</button>
          <button onClick={() => handlePromptConfirm(false)}>No</button>
        </div>
      )}
    </div>
  )
}

export default NavigationPromptLink
