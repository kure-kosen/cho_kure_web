import React from "react";
import { PersonalityCard } from "@/components/molecules/Personalities/Card";
import { chanyou } from "./mocks/api/personality";

import icon_chanyou from "./mocks/assets/icon_chanyou.jpg";

export default {
  title: "PersonalityCard"
};

export const normal = () => <PersonalityCard {...chanyou} />;

const longTextSource = {
  id: 99,
  name: "中村 優",
  nickname: "ちゃんゆー",
  description:
    "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
  image: icon_chanyou,
  tag_list: ["専攻科", "開発", "広報"]
};

export const longText = () => <PersonalityCard {...longTextSource} />;
