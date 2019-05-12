import * as React from "react";

import { addDecorator, addParameters, configure } from "@storybook/react";

import { setConsoleOptions } from "@storybook/addon-console";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";

import { MemoryRouter } from "react-router";
import GlobalStyle from "../src/commons/style";

addParameters({
  backgrounds: [
    { name: "white", value: "#fff", default: true },
    { name: "100%", value: "#fff" },
    { name: "80%", value: "#ccc" },
    { name: "60%", value: "#999" },
    { name: "40%", value: "#666" },
    { name: "20%", value: "#333" },
    { name: "0%", value: "#000" }
  ]
});

addDecorator(story => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>);
addDecorator(withGlobalStyles);
addDecorator(withKnobs);
addDecorator(
  withInfo({
    inline: true
  })
);

setConsoleOptions({ panelExclude: [] });

function withGlobalStyles(storyFn) {
  return (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  );
}

function loadStories() {
  const req = require.context("../src/stories/", true, /\.stories\.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
