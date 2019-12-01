import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "@/constants/styles/global";
import { ScrollToTop, LogToGA, isProduction } from "@/utils";
import ReactGA from "react-ga";

if (isProduction()) {
  ReactGA.initialize("UA-107670560-1", {
    gaOptions: { cookieDomain: "none" }
  });
} else {
  ReactGA.initialize("UA-107670560-2", {
    gaOptions: { cookieDomain: "none" },
    debug: true,
    testMode: true
  });
}

import App from "@/components/App";

ReactDOM.render(
  <BrowserRouter basename="/app">
    <>
      <App />
      <GlobalStyle />
      <ScrollToTop />
      <LogToGA />
    </>
  </BrowserRouter>,
  document.getElementById("app")
);
