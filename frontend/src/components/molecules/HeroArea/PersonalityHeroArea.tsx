import React from "react";
import styled from "styled-components";

import { color, device } from "@/constants/styles";

import HeroArea from "@/components/atoms/HeroArea";

export default () => (
  <HeroArea>
    <HeroContentWrapper>
      personality list
      <HeroContentBar />
      過去にラジオに出演したメンバーをご紹介します
    </HeroContentWrapper>
  </HeroArea>
);

const HeroContentWrapper = styled.div`
  width: 60%;
  font-size: 2rem;
  text-align: center;
  color: ${color.WHITE};

  @media ${device.mobile} {
    width: 90%;
  }
`;

const HeroContentBar = styled.hr`
  display: box;
  width: 50%;
  height: 2px;
  background-color: ${color.ORANGE};
  border: 0;
`;
