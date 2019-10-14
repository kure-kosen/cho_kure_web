import { kaneko, chanyou } from "./personality";
import ck013_radio from "../assets/ck013_radio.mp3";
import ck013_thumbnail from "../assets/ck013_thumbnail.png";

const description = `## Hello
- [Google](https://www.google.co.jp/) \n\n\n
- aa
- bb`;

export const ck013 = {
  id: 13,
  title: "#13 飲食店バグハンター",
  description,
  mp3: {
    url: ck013_radio
  },
  digest_mp3: { url: undefined },
  youtube_url: "",
  podcast_url: "",
  image: ck013_thumbnail,
  play_time: "32:52",
  duration: 1952,
  published_at: "2018/03/04 19:30",
  created_at: "2018/03/04 19:17",
  updated_at: "2018/03/04 19:30",
  personalities: [kaneko, chanyou]
};
