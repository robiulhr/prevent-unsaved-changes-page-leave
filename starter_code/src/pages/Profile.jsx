<<<<<<< HEAD
import { useReducer, useState } from "react";
=======
import { useReducer } from "react";
>>>>>>> c79b2ba (updated the starter code)
import "../../style.css";
import Nav from "../component/Nav";
import Form from "../component/Form";
import formReducer from "../reducer/formReducer";

function Profile() {
<<<<<<< HEAD
  const [dirty, setDirty] = useState(false);
=======
>>>>>>> c79b2ba (updated the starter code)
  const [formData, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });
  return (
    <>
      <Nav />
      <main>
        <h1>Welcome to Profile Page</h1>
        <Form formData={formData} dispatch={dispatch} />
      </main>
    </>
  );
}

export default Profile;
