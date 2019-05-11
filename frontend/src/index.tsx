import "normalize.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./commons/style";

import { App } from "./App";

ReactDOM.render(
  <BrowserRouter basename="/app">
    <>
      <App />
      <GlobalStyle />
    </>
  </BrowserRouter>,
  document.getElementById("app")
);
