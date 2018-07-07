import * as React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { chkColors } from "./../commons/color";

import { FeaturedPersonality } from "./../components/FeaturedPersonality";
import { FeaturedPersonalityButton } from "./../components/FeaturedPersonalityButton";

export const FeaturedPersonalitiesWrapper = () => (
  <FeaturedPersonalitiesWrapperStyle>
    <SliderWrapper>
      <Slider {...settings}>
        <FeaturedPersonality />
        <FeaturedPersonality />
        <FeaturedPersonality />
        <FeaturedPersonality />
        <FeaturedPersonality />
      </Slider>
    </SliderWrapper>

    <FeaturedPersonalityButton />
  </FeaturedPersonalitiesWrapperStyle>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const FeaturedPersonalitiesWrapperStyle = styled.div`
  width: 100%;
  color: white;
  height: 750px;
  background: -moz-linear-gradient(top, ${chkColors.skyblue} 0%, #ffffff 100%);
  background: -webkit-linear-gradient(top, ${chkColors.skyblue} 0%, #ffffff 100%);
  background: linear-gradient(to bottom, ${chkColors.skyblue} 0%, #ffffff 100%);
`;

const SliderWrapper = styled.div`
  padding: 50px 100px;
  margin: 0 auto;
`;
