import * as React from "react";
import { MemoryRouter } from "react-router";

// import {action} from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { FeaturedBlog } from "../components/FeaturedBlog";

storiesOf("FeaturedBlog", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(story => <MemoryRouter initialEntries={["/", "posts"]}>{story()}</MemoryRouter>)
  .add("default", () => (
    <FeaturedBlog
      title="news title"
      date="YYYY/MM/DD"
      summary="人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
        人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
      author="だれかさん"
      to="/blog"
    />
  ));

// IProps {
// title: string;
// date: string;
// summary: string;
// author: string;
// to: string;
// }

// title:"news title"
// date:"YYYY/MM/DD"
// summary:"人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
// 人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
// author:"だれかさん"
// to:"/blog"
