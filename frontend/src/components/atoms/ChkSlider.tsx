import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../../../css/ChkSlider.css";

export interface IProps {
  InnerComponent: any;
}

export default (props: IProps) => (
  <Slider {...settings}>{props.InnerComponent}</Slider>
);

const ChkNextArrow = (props: any) => <div onClick={props.onClick} />;

const ChkPrevArrow = (props: any) => <div onClick={props.onClick} />;

const settings = {
  dots: false,
  infinite: true,
  speed: 250,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <ChkNextArrow />,
  prevArrow: <ChkPrevArrow />
};
