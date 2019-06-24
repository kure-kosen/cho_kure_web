import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";
import { IPersonality } from "@/api/PersonalityApi";

export default ({ image }: Pick<IPersonality, "image">) => (
  <PictureArea src={image} />
);

const PictureArea = styled.img`
  width: calc(100% + 6px);
  height: 305px;
  object-fit: cover;
  margin-top: -3px;
  margin-left: -3px;
  background-color: ${color.RED};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 3px solid ${color.SKY_BLUE};
`;
