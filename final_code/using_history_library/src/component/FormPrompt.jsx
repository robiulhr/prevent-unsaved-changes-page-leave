// FormPrompt.jsx
import { useCallback, useContext } from "react";
import { useNavigate, useBeforeUnload } from "react-router-dom";
import usePrompt from "../hooks/usePrompt";
import { NavigationRef } from "../context/NavigationRefContext";

export default function FormPrompt({ dirty }) {
  let { unblockNavigationRef } = useContext(NavigationRef);
  const navigate = useNavigate();
  const currentRoute = window.location.pathname;
  const locationChangeHandler = useCallback(function (transition) {
    if (transition.action === "POP") {
      const confirmValue = confirm("are you sure?");
      if (confirmValue) {
        unblockNavigationRef.current?.();
        return true;
      } else {
        navigate(currentRoute);
        return false;
      }
    }
  });

  usePrompt(dirty, locationChangeHandler);
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
