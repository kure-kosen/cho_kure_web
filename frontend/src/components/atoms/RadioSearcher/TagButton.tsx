import React, { FC } from "react";
import { BlueButton } from "@/components/atoms/Buttons/Button";

interface Props {
  name: string;
}

export const TagButton: FC<Props> = ({ name }) => (
  <BlueButton name={name} size="small" inverse>
    {name}
  </BlueButton>
);
