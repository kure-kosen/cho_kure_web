import { kaneko, chanyou } from "./personality";
import ck013_radio from "../assets/ck013_radio.mp3";
import ck013_thumbnail from "../assets/ck013_thumbnail.png";

const description = `## Hello
- [Google](https://www.google.co.jp/) \n\n\n
- aa
- bb
- cc
- dd
- ee
- ff`;

export const ck013 = {
  id: 13,
  title: "#13 飲食店バグハンター",
  description,
  mp3: {
    url: ck013_radio
  },
  digestMp3: { url: undefined },
  youtubeUrl: "",
  podcastUrl: "",
  image: ck013_thumbnail,
  playTime: "32:52",
  duration: 1952,
  publishedAt: "2018/03/04 19:30",
  createdAt: "2018/03/04 19:17",
  updatedAt: "2018/03/04 19:30",
  personalities: [kaneko, chanyou]
};
