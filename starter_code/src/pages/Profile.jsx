import { useReducer } from "react";
import "../../style.css";
import Nav from "../component/Nav";
import Form from "../component/Form";
import formReducer from "../reducer/formReducer";

function Profile() {
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
