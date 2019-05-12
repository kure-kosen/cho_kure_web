import * as React from "react";
import { MemoryRouter } from "react-router";

import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

import { AboutBottom } from "../components/AboutBottom";

storiesOf("AboutBottom", module)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(story => <MemoryRouter initialEntries={["/", "posts"]}>{story()}</MemoryRouter>)
  .add("default", () => <AboutBottom />);
