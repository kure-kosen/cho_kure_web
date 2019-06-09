import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "@/constants/styles/global";

import App from "@/components/App";

ReactDOM.render(
  <BrowserRouter basename="/app">
    <>
      <App />
      <GlobalStyle />
    </>
  </BrowserRouter>,
  document.getElementById("app")
);
