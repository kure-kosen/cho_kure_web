import React from "react";
import { PersonalityCard } from "@/components/molecules/Personalities/Card";
import { chanyou } from "./mocks/api/personality";

export default {
  title: "PersonalityCard"
};

export const normal = () => <PersonalityCard {...chanyou} />;

const longTextSource = {
  ...chanyou,
  id: 99,
  description: "あ".repeat(200),
  affiliation_name: "あ".repeat(20),
  affiliation_details: "あ".repeat(20)
};

export const longText = () => <PersonalityCard {...longTextSource} />;
