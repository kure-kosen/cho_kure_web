import React from "react";
import { ck013 } from "./mocks/api/radio";
import { RadioCard } from "@/components/molecules/RadioCard/RadioCard";
import { RadioMiniCard } from "@/components/atoms/PopularRadio/RadioMiniCard";
import { RadioInlineCard } from "@/components/molecules/RadioCard/RadioInlineCard";

export default {
  title: "RadioCard"
};

export const normal = () => <RadioCard radio={ck013} />;

export const normalMini = () => <RadioMiniCard radio={ck013} />;

export const normalInline = () => <RadioInlineCard radio={ck013} />;
