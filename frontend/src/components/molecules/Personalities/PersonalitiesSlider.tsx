import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { color } from "@/constants/styles";

import { ChkSlider } from "@/components/atoms/Slider";
import { IPersonality } from "@/api/PersonalityApi";

import { BlueButton } from "@/components/atoms/Buttons/Button";
import { PersonalityCard } from "./Card";

interface IProps {
  personalities?: IPersonality[];
}

export const PersonalitiesSlider = ({ personalities }: IProps) => {
  if (!(personalities && personalities.length > 0)) return null;

  return (
    <FeaturedPersonalitiesWrapperStyle>
      <SliderWrapper>
        <ChkSlider>
          {personalities.map(personality => (
            <PersonalityCard key={personality.id} {...personality} />
          ))}
        </ChkSlider>
      </SliderWrapper>
      <BlueButton
        as={Link}
        to="/personality"
        maxWidth={200}
        style={{ margin: "0 auto" }}
      >
        personality list
      </BlueButton>
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
