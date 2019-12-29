import initStoryshots from "@storybook/addon-storyshots";
import {
  imageSnapshot,
  CustomConfig
} from "@storybook/addon-storyshots-puppeteer";

const storybookUrl = process.env.CIRCLECI
  ? "file:///home/circleci/repo/frontend/storybook-static"
  : "http://localhost:6006/";

const beforeScreenshot: CustomConfig["beforeScreenshot"] = (
  _page,
  _context
) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
};

const getMatchOptions: CustomConfig["getMatchOptions"] = _context => ({
  // Allow 0.55% difference
  failureThreshold: 0.0055,
  failureThresholdType: "percent"
});

initStoryshots({
  suite: "Image storyshots",
  test: imageSnapshot({ storybookUrl, beforeScreenshot, getMatchOptions })
});
