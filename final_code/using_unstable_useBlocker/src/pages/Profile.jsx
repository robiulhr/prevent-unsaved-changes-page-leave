import { useState } from 'react'
import '../../style.css'
import Nav from '../component/Nav'
import Form from '../component/Form'
import FormPrompt  from '../component/FormPrompt'

function Profile () {
  const [dirty, setDirty] = useState(false)
  return (
    <>
      <FormPrompt hasUnsavedChanges={dirty} />
      <Nav />
      <main>
        <h1>Welcome to Profile Page</h1>
        <Form setDirty={setDirty} />
      </main>
    </>
  )
}

export default Profile