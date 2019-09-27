import React from "react";
import HeroArea from "@/components/atoms/HeroArea";
import { PersonalityHeroArea } from "@/components/molecules/HeroArea/PersonalityHeroArea";

export default {
  title: "HeroArea"
};

export const normal = () => <HeroArea>HeroArea</HeroArea>;
export const personalityHeroArea = () => <PersonalityHeroArea />;
