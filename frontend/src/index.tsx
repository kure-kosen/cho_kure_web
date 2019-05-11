import "normalize.css";
import GlobalStyle from "./commons/style";

import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <BrowserRouter basename="/app">
    <>
      <App />
      <GlobalStyle />
    </>
  </BrowserRouter>,
  document.getElementById("app")
);
