import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function useFormData(formData, setDirty, dispatch) {
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
    } else setDirty(true);
  }, [formData]);
}
