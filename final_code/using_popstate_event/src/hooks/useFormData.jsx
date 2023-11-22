import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { PopstateContext } from "../context/PopstateContext";
export default function useFormData(formData, setDirty, dispatch) {
  const prevPopStateHandler = useContext(PopstateContext);
  const location = useLocation();
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
}
