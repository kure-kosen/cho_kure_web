import React from "react";
import { PersonalityCard } from "@/components/molecules/Personalities/Card";
import { PersonalityProfileMiniCard } from "@/components/atoms/FeaturedPersonality/PersonalityProfileMiniCard";
import { chanyou } from "./mocks/api/personality";

export default {
  title: "PersonalityCard"
};

export const normal = () => <PersonalityCard {...chanyou} />;

const longTextSource = {
  ...chanyou,
  id: 99,
  name: "あ".repeat(200),
  description: "あ".repeat(200),
  organization:
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん",
  position: "０１２３４５６７８９０１２３４５６７８９０１２３４５"
};

export const longText = () => <PersonalityCard {...longTextSource} />;

export const normalMini = () => <PersonalityProfileMiniCard {...chanyou} />;

export const longTextMini = () => (
  <PersonalityProfileMiniCard {...longTextSource} />
);
