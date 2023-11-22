import { useReducer, useState } from "react";
import "../../style.css";
import Nav from "../component/Nav";
import Form from "../component/Form";
import FormPrompt from "../component/FormPrompt";
import formReducer from "../reducer/formReducer";
import useFormData from "../hooks/useFormData";
function Profile() {
  const [dirty, setDirty] = useState(false);
  const [formData, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });
  useFormData(formData, setDirty, dispatch);
  return (
    <>
      <FormPrompt dirty={dirty} formData={formData} />
      <Nav formData={formData} />
      <main>
        <h1>Welcome to Profile Page</h1>
        <Form formData={formData} dispatch={dispatch} />
      </main>
    </>
  );
}

export default Profile;
