import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

import Slider from "@/components/atoms/Slider";

import PersonalityCard from "@/components/molecules/Personalities/Card";
import FeaturedPersonalityButton from "@/components/atoms/FeaturedPersonality/PersonalityListButton";

export default () => (
  <FeaturedPersonalitiesWrapperStyle>
    <SliderWrapper>
      <Slider
        InnerComponent={[
          <PersonalityCard />,
          <PersonalityCard />,
          <PersonalityCard />,
          <PersonalityCard />,
          <PersonalityCard />,
          <PersonalityCard />
        ]}
      />
    </SliderWrapper>
    <FeaturedPersonalityButton />
  </FeaturedPersonalitiesWrapperStyle>
);

const FeaturedPersonalitiesWrapperStyle = styled.div`
  width: 100%;
  color: ${color.WHITE};
  height: 750px;
  background: -moz-linear-gradient(top, ${color.SKY_BLUE} 0%, #ffffff 100%);
  background: -webkit-linear-gradient(top, ${color.SKY_BLUE} 0%, #ffffff 100%);
  background: linear-gradient(to bottom, ${color.SKY_BLUE} 0%, #ffffff 100%);
`;

const SliderWrapper = styled.div`
  padding: 50px 100px;
  margin: 0 auto;
`;
