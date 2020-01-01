import "normalize.css";

import React from "react";
import styled from "styled-components";
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
          <Spacer>{storyFn(context)}</Spacer>
          <GlobalStyle />
        </ChkThemeProvider>
      </BrowserRouter>
    );
  }
});

const Spacer = styled.div`
  margin: 1rem;
  > * {
    margin-right: 1rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`;
