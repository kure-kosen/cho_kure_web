import React from "react";

import RootStore from "@/stores/RootStore";
import { Provider } from "@/utils/Contexts/RootContext";

import { Header } from "@/layouts/Header";
import Main from "@/layouts/Main";
import Footer from "@/layouts/Footer";

// TODO(euglena1215): URLのproductionとの切り替え方法を考える
export default () => (
  <Provider value={new RootStore("http://localhost:3000")}>
    <Header />
    <Main />
    <Footer />
  </Provider>
);
