import { useReducer, useState } from "react";
import "../../style.css";
import Nav from "../component/Nav";
import Form from "../component/Form";
import FormPrompt from "../component/FormPrompt";
import useFormData from "../hooks/useFormData";
import formReducer from "../reducer/formReducer";
function Home() {
  const [dirty, setDirty] = useState(false);
  const [formData, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });
  useFormData(formData, setDirty, dispatch);
  return (
    <>
      <FormPrompt formData={formData} dirty={dirty} />
      <Nav />
      <main>
        <h1>Welcome to Home Page</h1>
        <Form formData={formData} dispatch={dispatch} />
      </main>
    </>
  );
}

export default Home;
