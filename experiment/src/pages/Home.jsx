import { useState } from 'react'
import '../../style.css'
import Nav from '../component/Nav'
import Form from '../component/Form'
import FormPrompt from '../component/FormPrompt'
function Home () {
  const [dirty, setDirty] = useState(false)
console.log("inside home page.")
  return (
    <>
      <FormPrompt dirty={dirty} />
      <Nav />
      <main>
        <h1>Welcome to Home Page</h1>
        <Form setDirty={setDirty} />
      </main>
    </>
  )
}

export default Home
