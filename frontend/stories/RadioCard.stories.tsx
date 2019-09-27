import React from "react";
import { RadioCard } from "@/components/molecules/RadioCard/RadioCard";
import { ck013 } from "./mocks/api/radio";

export default {
  title: "RadioCard"
};

export const normal = () => <RadioCard {...ck013} />;
