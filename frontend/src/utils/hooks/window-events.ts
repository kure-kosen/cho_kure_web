import React from "react";
import { useDebouncedCallback } from "use-debounce";

type Callback = () => void;

const useWindowEvent = (callback: Callback, target: string): void => {
  React.useEffect(() => {
    window.addEventListener(target, callback);
    return () => {
      window.removeEventListener(target, callback);
    };
  }, [callback]);
};

export const useResizeEvent = (callback: Callback, time: number): void => {
  const [listener] = useDebouncedCallback(callback, time);
  useWindowEvent(listener, "resize");
};
