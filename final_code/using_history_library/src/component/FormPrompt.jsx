// FormPrompt.jsx
import { useCallback, useContext } from "react";
import { useNavigate, useBeforeUnload, useLocation } from "react-router-dom";
import usePrompt from "../hooks/usePrompt";
import { NavigationRef } from "../context/NavigationRefContext";

export default function FormPrompt({ dirty,formData }) {
  let { unblockNavigationRef,blockHandlerRef } = useContext(NavigationRef);
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = location.pathname;
  const locationChangeHandler = useCallback(function (transition) {
    if (transition.action === "POP") {
      const confirmValue = confirm("are you sure?");
      if (confirmValue) {
        unblockNavigationRef.current?.();
        unblockNavigationRef.current = null;
        blockHandlerRef.current = null;
        localStorage.setItem(currentRoute, JSON.stringify(formData));
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
