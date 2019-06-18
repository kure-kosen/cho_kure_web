import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import CardImage from "@/components/atoms/RadioCard/RadioCardImage";
import PlayButton from "@/components/atoms/RadioCard/RadioCardPlayButton";

export default (props: IRadio) => {
  const { title, description, mp3, duration, play_time, image } = props;

  return (
    <RadioCardWrapperStyle>
      <CardImage image={image} />
      <Title>{title}</Title>
      <PlayButton mp3={mp3} duration={duration} play_time={play_time} />
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </RadioCardWrapperStyle>
  );
};

const RadioCardWrapperStyle = styled.div`
  width: 280px;
  height: 445px;
  border-radius: 8px;
  border: 3px solid ${color.SKY_BLUE};
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  margin-top: 5px;
  color: ${color.BLUE};
  text-align: center;
`;

const Description = styled.p``;
