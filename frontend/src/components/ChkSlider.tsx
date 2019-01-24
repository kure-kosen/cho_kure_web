import * as React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../../css/ChkSlider.css";

export interface Props {
  InnerComponent: any;
}

export const ChkSlider = (props: Props) => <Slider {...settings}>{props.InnerComponent}</Slider>;

const ChkNextArrow = (props: any) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
};

const ChkPrevArrow = (props: any) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
};

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
