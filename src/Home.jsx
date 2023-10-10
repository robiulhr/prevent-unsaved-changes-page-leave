import { useCallback, useEffect, useRef, useState } from 'react'
import '../style.css'
import Nav from './component/Nav'
import Form from './component/Form'
// import { useBeforeUnload } from 'react-router-dom'

function Home () {
  const [dirty, setDirty] = useState(false);
  // const options = { capture: true }

  // const beforeunloadHandler = useCallback(function (e) {
  //   e.preventDefault()
  //   e.returnValue = ''
  // })
  // useEffect(() => {
  //   window.addEventListener('beforeunload', beforeunloadHandler)
  //   return () => {
  //     window.removeEventListener('beforeunload', beforeunloadHandler)
  //   }
  // }, [dirty])

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
  return (
    <>
      <Nav />
      <main>
        <h1>Welcome to Home Page</h1>
        <Form setDirty={setDirty} />
      </main>
    </>
  )
}

export default Home
