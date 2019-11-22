import { mapKeysCamelCase } from "@/utils";
export const rawSnakeCase = {
  id: 14,
  name: "小畠 一泰",
  nickname: "こばくん",
  description:
    "<p>Web Frontend Engineerをやりながら地図作ったり、ペットボトル飛ばしたりする人です</p>\n",
  image:
    "https://cho-kure.s3.amazonaws.com/uploads/personality/image/14/thumb_83JHKvBf_4x4.jpg",
  tag_list: ["本科生", "電気科", "開発"],
  radios: [
    {
      id: 13,
      title: "#13 飲食店バグハンター",
      description:
        "<p>最近やっていること、Ruby25周年、else if、コードゴルフ、ちょっくれサイトの仕組み、IoTなどの話をしました。</p>\n",
      mp3: {
        url: "https://cho-kure.s3.amazonaws.com/uploads/radio/mp3/13/ck013.mp3"
      },
      digest_mp3: { url: null },
      youtube_url: null,
      podcast_url: null,
      image:
        "https://cho-kure.s3.amazonaws.com/uploads/radio/image/13/thumb_ck013.png",
      play_time: "32:52",
      published_at: "2018/03/04 19:30",
      created_at: "2018/03/04 19:17",
      updated_at: "2018/03/04 19:30"
    },
    {
      id: 32,
      title: "#32 Helloで握る主導権",
      description:
        "<p>ペットボトルロケット、二人の関係、寮について、相部屋の不満、Podcastを始めようなどの話をしました。</p>\n\n<p>関連リンク</p>\n\n<ul>\n<li><a href=\"https://kobakazu0429.github.io/podcast-diagnosis\">Podcast診断ページ</a></li>\n<li><a href=\"https://booth.pm/ja/items/828339\">今日からはじめる技術Podcast 完全入門[PDF版]</a></li>\n</ul>\n",
      mp3: {
        url:
          "https://cho-kure.s3.amazonaws.com/uploads/radio/mp3/32/ck032.1.mp3"
      },
      digest_mp3: { url: null },
      youtube_url: null,
      podcast_url: null,
      image:
        "https://cho-kure.s3.amazonaws.com/uploads/radio/image/32/thumb_32_thum.jpg",
      play_time: "41:09",
      published_at: "2018/07/15 18:30",
      created_at: "2018/07/15 17:20",
      updated_at: "2018/07/15 23:16"
    }
  ]
};
export const expectCamelCase = {
  id: 14,
  name: "小畠 一泰",
  nickname: "こばくん",
  description:
    "<p>Web Frontend Engineerをやりながら地図作ったり、ペットボトル飛ばしたりする人です</p>\n",
  image:
    "https://cho-kure.s3.amazonaws.com/uploads/personality/image/14/thumb_83JHKvBf_4x4.jpg",
  tagList: ["本科生", "電気科", "開発"],
  radios: [
    {
      id: 13,
      title: "#13 飲食店バグハンター",
      description:
        "<p>最近やっていること、Ruby25周年、else if、コードゴルフ、ちょっくれサイトの仕組み、IoTなどの話をしました。</p>\n",
      mp3: {
        url: "https://cho-kure.s3.amazonaws.com/uploads/radio/mp3/13/ck013.mp3"
      },
      digestMp3: { url: null },
      youtubeUrl: null,
      podcastUrl: null,
      image:
        "https://cho-kure.s3.amazonaws.com/uploads/radio/image/13/thumb_ck013.png",
      playTime: "32:52",
      publishedAt: "2018/03/04 19:30",
      createdAt: "2018/03/04 19:17",
      updatedAt: "2018/03/04 19:30"
    },
    {
      id: 32,
      title: "#32 Helloで握る主導権",
      description:
        "<p>ペットボトルロケット、二人の関係、寮について、相部屋の不満、Podcastを始めようなどの話をしました。</p>\n\n<p>関連リンク</p>\n\n<ul>\n<li><a href=\"https://kobakazu0429.github.io/podcast-diagnosis\">Podcast診断ページ</a></li>\n<li><a href=\"https://booth.pm/ja/items/828339\">今日からはじめる技術Podcast 完全入門[PDF版]</a></li>\n</ul>\n",
      mp3: {
        url:
          "https://cho-kure.s3.amazonaws.com/uploads/radio/mp3/32/ck032.1.mp3"
      },
      digestMp3: { url: null },
      youtubeUrl: null,
      podcastUrl: null,
      image:
        "https://cho-kure.s3.amazonaws.com/uploads/radio/image/32/thumb_32_thum.jpg",
      playTime: "41:09",
      publishedAt: "2018/07/15 18:30",
      createdAt: "2018/07/15 17:20",
      updatedAt: "2018/07/15 23:16"
    }
  ]
};

describe("mapKeysCamelCase", () => {
  it("convert-object-keys-to-camelcase", () => {
    const convertedData = mapKeysCamelCase(rawSnakeCase);
    expect(convertedData).toStrictEqual(expectCamelCase);
  });
});
