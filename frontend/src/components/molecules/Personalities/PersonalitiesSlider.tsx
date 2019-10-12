import React from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import { color } from "@/constants/styles";

import Slider from "@/components/atoms/Slider";

import PersonalityCard from "@/components/molecules/Personalities/Card";
import FeaturedPersonalityButton from "@/components/atoms/FeaturedPersonality/PersonalityListButton";

interface IProps {
  personalities?: IPersonality[];
}

export default ({ personalities }: IProps) => {
  if (!(personalities && personalities.length > 0)) return null;

  return (
    <FeaturedPersonalitiesWrapperStyle>
      <SliderWrapper>
        <Slider>
          {personalities.map(personality => (
            <PersonalityCard key={personality.id} {...personality} />
          ))}
        </Slider>
      </SliderWrapper>
      <FeaturedPersonalityButton />
    </FeaturedPersonalitiesWrapperStyle>
  );
};

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
