require("normalize.css");
require("./commons/font");

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import { App } from "./App";
import RootStore from "./stores/RootStore";

ReactDOM.render(
  <Provider rootStore={new RootStore()}>
    <BrowserRouter basename="/app">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
