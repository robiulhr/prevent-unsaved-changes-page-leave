import { useContext, useEffect, useReducer, useState } from "react";
import "../../style.css";
import Nav from "../component/Nav";
import Form from "../component/Form";
import FormPrompt from "../component/FormPrompt";
import formReducer from "../reducer/formReducer";
import { useLocation } from "react-router-dom";
import { PopstateContext } from "../context/PopstateContext";
function Profile() {
  const [dirty, setDirty] = useState(false);
  const prevPopStateHandler = useContext(PopstateContext);
  const location = useLocation();
  const [formData, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });
  // restore the saved data from local storage
  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem(location.pathname));
    if (prevData) {
      dispatch({ type: "restore", data: prevData });
      localStorage.removeItem(location.pathname);
    }
  }, []);

  // mark the form as dirty if there is form value otherwise mark as not dirty
  useEffect(() => {
    if (formData.name === "" && formData.email === "") {
      setDirty(false);
      prevPopStateHandler.current && window.removeEventListener("popstate", prevPopStateHandler.current);
      prevPopStateHandler.current = null;
    } else setDirty(true);
  }, [formData]);
  return (
    <>
      <FormPrompt dirty={dirty} formData={formData} />
      <Nav formData={formData} />
      <main>
        <h1>Welcome to Profile Page</h1>
        <Form setDirty={setDirty} formData={formData} dispatch={dispatch} />
      </main>
    </>
  );
}

export default Profile;
