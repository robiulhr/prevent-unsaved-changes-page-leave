import { useCallback, useEffect, useRef, useState } from 'react'
import '../../style.css'
import Nav from '../component/Nav'
import Form from '../component/Form'
// import { useBeforeUnload } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { FormPrompt } from '../hooks/usePrompt'
function Home () {
  const [dirty, setDirty] = useState(false)
  // const navigate = useNavigate()
  // const History = createBrowserHistory()

  // // This ref is used to save the event to remove the event when the it's need to remove
  // const unblockNavigationRef = useRef()

  // const beforeunloadHandler = useCallback(
  //   function (e) {
  //     if (dirty) {
  //       e.preventDefault()
  //       e.returnValue = ''
  //     }
  //   },
  //   [dirty]
  // )

  // useEffect(() => {
  //   console.log('useEffect fired.', dirty)
  //   window.addEventListener('beforeunload', beforeunloadHandler)
  //   return () => {
  //     console.log('return function has been fired.')
  //     window.removeEventListener('beforeunload', beforeunloadHandler)
  //   }
  // }, [beforeunloadHandler])

  // useEffect(() => {
  //   if (dirty) {
  //     const currentRoute = window.location.pathname
  //     // Remove previous block function if exists.
  //     unblockNavigationRef.current?.()
  //     // Block route navigation requests when the isDirty flag is on.
  //     // Instead of navigating when an attempt to navigate happens, save the destination route and render the dirty prompt
  //     unblockNavigationRef.current = History.block(transition => {
  //       // if (transition.action === 'POP') {
  //       const confirmValue = confirm('are you sure?')
  //       if (confirmValue) {
  //         unblockNavigationRef.current?.()
  //         navigate(transition.location.pathname)
  //         unblockNavigationRef.current?.()
  //       } else {
  //         navigate(currentRoute)
  //       }
  //       // }
  //     })
  //   } else {
  //     // Unblock navigation when the dirty state is cleared
  //     unblockNavigationRef.current?.()
  //   }
  // }, [dirty])

  return (
    <>
      <FormPrompt hasUnsavedChanges={dirty} />
      <Nav />
      <main>
        <h1>Welcome to Home Page</h1>
        <Form setDirty={setDirty} />
      </main>
    </>
  )
}

export default Home
