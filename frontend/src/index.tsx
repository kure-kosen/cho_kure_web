import "./commons/font";
import "normalize.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

ReactDOM.render(
  <BrowserRouter basename="/app">
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
