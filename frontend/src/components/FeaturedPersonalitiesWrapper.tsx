import React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";

import { ChkSlider } from "./ChkSlider";

import { FeaturedPersonality } from "./../components/FeaturedPersonality";
import { FeaturedPersonalityButton } from "./../components/FeaturedPersonalityButton";

export const FeaturedPersonalitiesWrapper = () => (
  <FeaturedPersonalitiesWrapperStyle>
    <SliderWrapper>
      <ChkSlider
        InnerComponent={[
          <FeaturedPersonality />,
          <FeaturedPersonality />,
          <FeaturedPersonality />,
          <FeaturedPersonality />,
          <FeaturedPersonality />,
          <FeaturedPersonality />
        ]}
      />
    </SliderWrapper>
    <FeaturedPersonalityButton />
  </FeaturedPersonalitiesWrapperStyle>
);

const FeaturedPersonalitiesWrapperStyle = styled.div`
  width: 100%;
  color: white;
  height: 750px;
  background: -moz-linear-gradient(top, ${chkColors.skyblue} 0%, #ffffff 100%);
  background: -webkit-linear-gradient(
    top,
    ${chkColors.skyblue} 0%,
    #ffffff 100%
  );
  background: linear-gradient(to bottom, ${chkColors.skyblue} 0%, #ffffff 100%);
`;

const SliderWrapper = styled.div`
  padding: 50px 100px;
  margin: 0 auto;
`;
