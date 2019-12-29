import React from "react";
import { PersonalityCard } from "@/components/molecules/Personalities/Card";
import { PersonalityProfileMiniCard } from "@/components/atoms/FeaturedPersonality/PersonalityProfileMiniCard";
import { PersonalityMobileCard } from "@/components/molecules/Personalities/MobileCard";
import { chanyou } from "./mocks/api/personality";

export default {
  title: "PersonalityCard"
};

const longTextSource = {
  ...chanyou,
  id: 99,
  name: "あ".repeat(200),
  description: "あ".repeat(200),
  organization:
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん",
  position: "０１２３４５６７８９０１２３４５６７８９０１２３４５"
};

export const normal = () => <PersonalityCard {...chanyou} />;
export const longText = () => <PersonalityCard {...longTextSource} />;
export const normalMini = () => <PersonalityProfileMiniCard {...chanyou} />;
export const longTextMini = () => (
  <PersonalityProfileMiniCard {...longTextSource} />
);
export const nomalMobile = () => (
  <PersonalityMobileCard personality={chanyou} />
);
export const longTextMobile = () => (
  <PersonalityMobileCard personality={longTextSource} />
);
