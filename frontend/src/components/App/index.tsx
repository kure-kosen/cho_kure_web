import React from "react";

import RootStore from "@/stores/RootStore";
import { Provider } from "@/utils/Contexts/RootContext";

import { Header, Main, Footer } from "@/layouts";
import { isDevelopment } from "@/utils";
import { CHK } from "@/constants/url";

export default () => (
  <Provider
    value={
      new RootStore(isDevelopment() ? CHK.BACK_END.DEV : CHK.BACK_END.PROD)
    }
  >
    <Header />
    <Main />
    <Footer />
  </Provider>
);
