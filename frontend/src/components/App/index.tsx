import React from "react";

import RootStore from "@/stores/RootStore";
import { Provider } from "@/utils/Contexts/RootContext";

import { Header } from "@/layouts/Header";
import Main from "@/layouts/Main";
import Footer from "@/layouts/Footer";
import { isDevelopment } from "@/utils";
import { CHK } from "@/constants/url";
import { ChkThemeProvider } from "@/theme/ChkThemeProvider";

export default () => (
  <Provider
    value={
      new RootStore(isDevelopment() ? CHK.BACK_END.DEV : CHK.BACK_END.PROD)
    }
  >
    <ChkThemeProvider themeName="chk">
      <Header />
      <Main />
      <Footer />
    </ChkThemeProvider>
  </Provider>
);
