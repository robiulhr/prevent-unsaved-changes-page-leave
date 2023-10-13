import { useCallback, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../../style.css'
import Nav from '../component/Nav'
import Form from '../component/Form'
function Profile () {
  console.log('profle has been run')
  const [dirty, setDirty] = useState(false)

  // const beforeunloadHandler = useCallback(function (e) {
  //   e.preventDefault()
  //   e.returnValue = ''
  // })
  // useEffect(() => {
  //   window.addEventListener('beforeunload', beforeunloadHandler)
  //   return () => {
  //     window.removeEventListener('beforeunload', beforeunloadHandler)
  //   }
  // }, [dirty, beforeunloadHandler])

  // useEffect(() => {
  //   const beforeunloadHandler = function (e) {
  //     e.preventDefault()
  //     e.returnValue = ''
  //   }

  //   window.addEventListener('beforeunload', beforeunloadHandler)

  //   return () => {
  //     window.removeEventListener('beforeunload', beforeunloadHandler)
  //   }
  // }, [dirty])

  // const useBefore = useBeforeUnload(
  //   useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       // Prompt a confirmation message when the user tries to leave the route
  //       e.returnValue = "Are you sure you want to leave this page?";
  //     },
  //     [dirty]
  //   ),
  //   { capture: true }
  // );
  // console.log(useBeforeUnload);
  // console.log(useBefore);

  // const prevPopStateHandler = useRef()
  // const history = useHistory()

  // useEffect(() => {
  //   console.log(dirty)
  //   if (dirty) {
  //     const currentRoute = window.location.pathname
  //     prevPopStateHandler.current &&
  //       window.removeEventListener('popstate', prevPopStateHandler.current)
  //     const popStateHandler = function (event) {
  //       event.preventDefault()
  //       // The popstate event is fired each time when the current history entry changes.
  //       const confirmValue = confirm(
  //         'You pressed a Back button! Are you sure?!'
  //       )
  //       if (confirmValue === true) {
  //         history.push(window.location.pathname)
  //         prevPopStateHandler.current &&
  //           window.removeEventListener('popstate', prevPopStateHandler.current)
  //       } else {
  //         // Stay on the current page.
  //         history.push(currentRoute)
  //       }
  //     }
  //     prevPopStateHandler.current = popStateHandler
  //     window.addEventListener('popstate', popStateHandler, false)
  //   } else {
  //     prevPopStateHandler.current &&
  //       window.removeEventListener('popstate', prevPopStateHandler.current)
  //   }
  // }, [dirty])

  return (
    <>
      <Nav />
      <main>
        <h1>Welcome to Profile Page</h1>
        <Form setDirty={setDirty} />
      </main>
    </>
  )
}

export default Profile
