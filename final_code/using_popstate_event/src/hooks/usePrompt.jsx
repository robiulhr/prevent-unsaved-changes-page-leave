import { useEffect, useContext } from "react";
import { PopstateContext } from "../context/PopstateContext";

function usePrompt(dirty, popStateHandler) {
  let prevPopStateHandler = useContext(PopstateContext);
  useEffect(() => {
    if (dirty) {
      prevPopStateHandler.current && window.removeEventListener("popstate", prevPopStateHandler.current);
      prevPopStateHandler.current = popStateHandler;
      window.addEventListener("popstate", popStateHandler, false);
    }
  }, [dirty]);
}

export default usePrompt;
