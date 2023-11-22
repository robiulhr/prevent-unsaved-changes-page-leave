import { useCallback } from "react";

import { useBeforeUnload, useLocation } from "react-router-dom";
import usePrompt from "../hooks/usePrompt";

const stepLinks = ["/", "/profile"];
const FormPrompt = ({ dirty, formData }) => {
  const location = useLocation();
  const onLocationChange = useCallback(
    ({ nextLocation }) => {
      let confirmValue = false;
      if (stepLinks.includes(nextLocation.pathname) && dirty) {
        confirmValue = !window.confirm("You have unsaved changes, are you sure you want to leave?");
      }
      if (!confirmValue) localStorage.setItem(location.pathname, JSON.stringify(formData));
      return confirmValue;
    },
    [dirty, formData]
  );

  usePrompt(onLocationChange, dirty);
  useBeforeUnload(
    useCallback(
      (event) => {
        if (dirty) {
          event.preventDefault();
          event.returnValue = "";
        }
      },
      [dirty]
    ),
    { capture: true }
  );

  return null;
};

export default FormPrompt;
