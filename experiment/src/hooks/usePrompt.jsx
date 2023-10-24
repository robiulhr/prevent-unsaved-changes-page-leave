import { useEffect, useContext } from "react";
import { PopstateContext } from "../context/PopstateContext";

function usePrompt(dirty, popStateHandler) {
  let { prevPopStateHandler, setPrevPopStateHandler } = useContext(PopstateContext);
  useEffect(() => {
    if (dirty) {
      console.log(dirty)
      prevPopStateHandler && window.removeEventListener("popstate", prevPopStateHandler);
      setPrevPopStateHandler(() => {
        return popStateHandler;
      });
      window.addEventListener("popstate", popStateHandler);
    } else {
      if (prevPopStateHandler) {
        window.removeEventListener("popstate", prevPopStateHandler);
        setPrevPopStateHandler(null);
      }
    }
  }, [dirty]);
}

export default usePrompt;
