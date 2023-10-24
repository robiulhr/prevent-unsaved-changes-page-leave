// FormPrompt.jsx
import { useCallback, useContext } from "react";
import { useNavigate, useBeforeUnload } from "react-router-dom";
import usePrompt from "../hooks/usePrompt";
import { PopstateContext } from "../context/PopstateContext";

export default function FormPrompt({ dirty }) {
  let { prevPopStateHandler, setPrevPopStateHandler } = useContext(PopstateContext);
  const navigate = useNavigate();
  const currentRoute = window.location.pathname;
  const popStateHandler = function (e) {
    console.log("from insdie popstate handler.");
    e?.preventDefault?.();
    // The popstate event is fired each time when the current history entry changes.
    const confirmValue = confirm("You pressed a Back button! Are you sure?!");
    if (confirmValue) {
      prevPopStateHandler && window.removeEventListener("popstate", prevPopStateHandler);
      setPrevPopStateHandler(null);
      return true;
    } else {
      // Stay on the current page.
      console.log(currentRoute);
      navigate(currentRoute);
      return false;
    }
  };
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
