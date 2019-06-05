import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import GlobalStyle from "@/constants/styles/global";

import App from "@/App";
import RootStore from "@/stores/RootStore";

// TODO(euglena1215): URLのproductionとの切り替え方法を考える
ReactDOM.render(
  <Provider rootStore={new RootStore("http://localhost:3000")}>
    <BrowserRouter basename="/app">
      <>
        <App />
        <GlobalStyle />
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
