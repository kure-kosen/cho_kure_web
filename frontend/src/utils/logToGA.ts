import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export const LogToGA: FC<{}> = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    console.log("logging GA: " + pathname + search);
    ReactGA.pageview(pathname + search);
  }, [pathname, search]);

  return null;
};
