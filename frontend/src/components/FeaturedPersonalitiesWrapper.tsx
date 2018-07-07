import * as React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../../css/chkArrows.css";

import { chkColors } from "./../commons/color";

import { FeaturedPersonality } from "./../components/FeaturedPersonality";
import { FeaturedPersonalityButton } from "./../components/FeaturedPersonalityButton";

function ChkNextArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function ChkPrevArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

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
  dots: false,
  infinite: true,
  speed: 250,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <ChkNextArrow />,
  prevArrow: <ChkPrevArrow />,
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
