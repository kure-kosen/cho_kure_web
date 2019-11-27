import React, { FC } from "react";
import styled from "styled-components";

import { color, device } from "@/constants/styles";

import { HeroArea } from "@/components/atoms/HeroArea";

interface Props {
  children: string;
}

export const RadioDetailHeroArea: FC<Props> = ({ children }) => (
  <HeroArea>
    <HeroContentWrapper>
      <Title>{children}</Title>
    </HeroContentWrapper>
  </HeroArea>
);

const HeroContentWrapper = styled.div`
  width: 60%;
  text-align: center;
  color: ${color.WHITE};
`;

const Title = styled.h1`
  font-size: 2rem;
  @media ${device.mobile} {
    font-size: calc(24px + 0.1vw);
  }
`;
