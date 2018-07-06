import * as React from "react";
import styled from "styled-components";

import { goodSpace } from "./../commons/style";
import { chkColors } from "./../commons/color";

import { FeaturedPersonality } from "./../components/FeaturedPersonality";
import { FeaturedPersonalityButton } from "./../components/FeaturedPersonalityButton";

export const FeaturedPersonalitiesWrapper = () => (
  <FeaturedPersonalitiesWrapperStyle>
    <Slider>
      <FeaturedPersonality />
      <FeaturedPersonality />
      <FeaturedPersonality />
    </Slider>
    <FeaturedPersonalityButton />
  </FeaturedPersonalitiesWrapperStyle>
);

const FeaturedPersonalitiesWrapperStyle = styled.div`
  width: 100%;
  color: white;
  height: 750px;
  background: -moz-linear-gradient(top, ${chkColors.skyblue} 0%, #ffffff 100%);
  background: -webkit-linear-gradient(top, ${chkColors.skyblue} 0%, #ffffff 100%);
  background: linear-gradient(to bottom, ${chkColors.skyblue} 0%, #ffffff 100%);
`;

const Slider = styled.div`
  padding: 45px 50px;
  ${goodSpace};
`;
