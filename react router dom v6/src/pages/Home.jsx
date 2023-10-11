import { useCallback, useEffect, useRef, useState } from 'react'
import '../../style.css'
import Nav from '../component/Nav'
import Form from '../component/Form'
// import { useBeforeUnload } from 'react-router-dom'

function Home () {
  const [dirty, setDirty] = useState(false);
    const beforeunloadHandler = useCallback(
        function (e) {
            if (dirty) {
                e.preventDefault();
                e.returnValue = "";
            }
        },
        [dirty]
    );

    useEffect(() => {
        console.log("useEffect fired.", dirty);
        window.addEventListener("beforeunload", beforeunloadHandler);
        return () => {
            console.log("return function has been fired.");
            window.removeEventListener("beforeunload", beforeunloadHandler);
        };
    }, [beforeunloadHandler]);
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
