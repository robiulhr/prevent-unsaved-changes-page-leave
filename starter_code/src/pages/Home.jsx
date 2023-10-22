import '../../style.css'
import Nav from '../component/Nav'
import Form from '../component/Form'
import { useEffect, useState, useCallback } from 'react'
function Home () {
  const [dirty, setDirty] = useState(false)

  const beforeunloadHandler = useCallback(
    function (e) {
      if (dirty) {
        e.preventDefault()
        e.returnValue = ''
      }
    },
    [dirty]
  )

  useEffect(() => {
    window.addEventListener('beforeunload', beforeunloadHandler)
    return () => {
      window.removeEventListener('beforeunload', beforeunloadHandler)
    }
  }, [beforeunloadHandler])
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
