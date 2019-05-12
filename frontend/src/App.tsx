import * as React from "react";

import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { Footer } from "./layouts/Footer";

export const App = () => (
  <React.Fragment>
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
);
