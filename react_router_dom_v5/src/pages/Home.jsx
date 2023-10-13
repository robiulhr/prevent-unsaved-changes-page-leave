import { useCallback, useEffect, useRef, useState } from 'react'
import '../../style.css'
import Nav from '../component/Nav'
import Form from '../component/Form'
// import { useBeforeUnload } from 'react-router-dom'
import { Prompt } from 'react-router-dom/cjs/react-router-dom'

function Home () {
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
  // }, [dirty])

  function confirmPageLeaveHandler () {
    if (dirty) {
      const isConfirm = confirm('Do you want to leave the page?')
      if (isConfirm) console.log('yes')
      else console.log('NO')
    }
  }

  return (
    <>
      <Nav confirmPageLeaveHandler={confirmPageLeaveHandler} />
      <main>
        <h1>Welcome to Home Page</h1>
        <Form setDirty={setDirty} />
      </main>
    </>
  )
}

export default Home
