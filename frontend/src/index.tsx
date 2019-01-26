import "./commons/font";
import "normalize.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./commons/style";

import { App } from "./App";

ReactDOM.render(
  <BrowserRouter basename="/app">
    <React.Fragment>
      <App />
      <GlobalStyle />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("app")
);
