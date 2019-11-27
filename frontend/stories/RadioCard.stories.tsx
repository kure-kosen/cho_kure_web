import React from "react";
import { ck013 } from "./mocks/api/radio";
import { RadioCard } from "@/components/molecules/RadioCard/RadioCard";
import { RadioMiniCard } from "@/components/atoms/PopularRadio/RadioMiniCard";

export default {
  title: "RadioCard"
};

export const normal = () => <RadioCard {...ck013} />;

export const normalMini = () => <RadioMiniCard {...ck013} />;
