import "normalize.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { makeDecorator } from "@storybook/addons";
import GlobalStyle from "../src/constants/styles/global";
import { ChkThemeProvider } from "../src/theme/ChkThemeProvider";

export const chkDecorator = makeDecorator({
  name: "withSomething",
  parameterName: "something",
  wrapper: (storyFn, context) => {
    return (
      <BrowserRouter>
        <ChkThemeProvider themeName="chk">
          {storyFn(context)}
          <GlobalStyle />
        </ChkThemeProvider>
      </BrowserRouter>
    );
  }
});
