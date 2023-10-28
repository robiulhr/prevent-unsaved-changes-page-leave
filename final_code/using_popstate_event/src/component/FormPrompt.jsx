// FormPrompt.jsx
import { useCallback, useContext } from "react";
import { useNavigate, useBeforeUnload, useLocation } from "react-router-dom";
import usePrompt from "../hooks/usePrompt";
import { PopstateContext } from "../context/PopstateContext";

export default function FormPrompt({ dirty, formData }) {
  let prevPopStateHandler = useContext(PopstateContext);
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = window.location.pathname;
  const popStateHandler = useCallback(
    function (e) {
      // The popstate event is fired each time when the current history entry changes.
      const confirmValue = confirm("You pressed a Back button! Are you sure?!");
      if (confirmValue) {
        prevPopStateHandler.current && window.removeEventListener("popstate", prevPopStateHandler.current);
        prevPopStateHandler.current = null;
        localStorage.setItem(location.pathname, JSON.stringify(formData));
        return true;
      } else {
        // Stay on the current page.
        navigate(currentRoute);
        if (prevPopStateHandler.current) {
          window.removeEventListener("popstate", prevPopStateHandler.current);
          window.addEventListener("popstate", prevPopStateHandler.current, false);
        }
        return false;
      }
    },
    [prevPopStateHandler.current]
  );
  usePrompt(dirty, popStateHandler);
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
}
