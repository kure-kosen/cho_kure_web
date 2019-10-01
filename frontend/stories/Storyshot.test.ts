import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

const storybookUrl = process.env.CIRCLECI
  ? "file:///home/circleci/repo/frontend/storybook-static"
  : "http://localhost:6006/";

initStoryshots({
  suite: "Image storyshots",
  test: imageSnapshot({ storybookUrl })
});
