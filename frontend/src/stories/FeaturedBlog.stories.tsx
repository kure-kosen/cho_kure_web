import * as React from "react";
import { MemoryRouter } from "react-router";

import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

import { text10, text30, text100, text200 } from "./fakers/text";

import { FeaturedBlog } from "../components/FeaturedBlog";

storiesOf("FeaturedBlog", module)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(story => <MemoryRouter initialEntries={["/", "posts"]}>{story()}</MemoryRouter>)
  .add("default", () => (
    <FeaturedBlog
      title="news title"
      date="YYYY/MM/DD"
      summary="人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
      author="だれかさん"
      to="/blog"
    />
  ))
  .add("ShortText", () => <FeaturedBlog title={text10} date="YYYY/MM/DD" summary={text30} author={text10} to="/blog" />)
  .add("LongText", () => <FeaturedBlog title={text30} date="YYYY/MM/DD" summary={text100} author={text30} to="/blog" />)
  .add("VeryLongText", () => (
    <FeaturedBlog title={text30} date="YYYY/MM/DD" summary={text200} author={text30} to="/blog" />
  ));
