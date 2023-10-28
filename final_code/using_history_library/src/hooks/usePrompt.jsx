import { useEffect, useContext } from "react";
import { NavigationRef } from "../context/NavigationRefContext";
import { createBrowserHistory } from "history";

export default function usePrompt(dirty, locationChangeHandler) {
  let { unblockNavigationRef, blockHandlerRef } = useContext(NavigationRef);
  const history = createBrowserHistory();
  useEffect(() => {
    if (dirty) {
      if (unblockNavigationRef.current) unblockNavigationRef.current();
      unblockNavigationRef.current = history.listen(locationChangeHandler);
      blockHandlerRef.current = locationChangeHandler;
    }
  }, [dirty]);
}
