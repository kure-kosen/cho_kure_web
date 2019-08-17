import React from "react";

type Callback = () => void;

const useWindowEvent = (callback: Callback, target: string): void => {
  React.useEffect(() => {
    window.addEventListener(target, callback);
    return () => {
      window.removeEventListener(target, callback);
    };
  }, [callback]);
};

export const useResizeEvent = (callback: Callback): void =>
  useWindowEvent(callback, "resize");
