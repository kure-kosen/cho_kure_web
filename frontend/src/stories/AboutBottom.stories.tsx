import * as React from "react";
import { MemoryRouter } from "react-router";

// import {action} from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { AboutBottom } from "../components/AboutBottom";

storiesOf("AboutBottom", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(story => <MemoryRouter initialEntries={["/", "posts"]}>{story()}</MemoryRouter>)
  .add("default", () => <AboutBottom />);
