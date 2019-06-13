import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import CardImage from "@/components/atoms/RadioCard/RadioCardImage";
import CardContent from "@/components/atoms/RadioCard/RadioCardContent";
import PlayButton from "@/components/atoms/RadioCard/RadioCardPlayButton";

export default (props: IRadio) => {
  const { title, description, mp3, play_time, image } = props;

  return (
    <RadioCardWrapperStyle>
      <CardImage image={image} />
      <PlayButton mp3={mp3} play_time={play_time} />
      <CardContent title={title} description={description} />
    </RadioCardWrapperStyle>
  );
};

const RadioCardWrapperStyle = styled.div`
  width: 280px;
  height: 445px;
  border-radius: 8px;
  border: 3px solid ${color.SKY_BLUE};
  position: relative;
`;
