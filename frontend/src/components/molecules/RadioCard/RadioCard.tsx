import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import CardImage from "@/components/atoms/RadioCard/RadioCardImage";
import PlayButton from "@/components/atoms/RadioCard/RadioCardPlayButton";
import PersonalityIcons from "@/components/molecules/RadioPersonalityIcons";

export default (props: IRadio) => {
  const {
    title,
    description,
    mp3,
    duration,
    play_time,
    image,
    personalities
  } = props;

  return (
    <RadioCardWrapperStyle>
      <CardImage image={image} />
      <Title>{title}</Title>
      <PlayButton mp3={mp3} duration={duration} play_time={play_time} />
      <Container>
        <DescriptionWrapper>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </DescriptionWrapper>
        <PersonalityIconsWrapper>
          <PersonalityIcons personalities={personalities} />
        </PersonalityIconsWrapper>
      </Container>
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
  padding-bottom: 50px;
`;

const Title = styled.h3`
  height: 1.2rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  vertical-align: middle;
  margin: 0;
  margin-top: 5px;
  color: ${color.BLUE};
  text-align: center;
`;

const Container = styled.div`
  height: 100%;
`;

const DescriptionWrapper = styled.div`
  height: calc(100% - (190px + (1.2rem + 5px) + (38px + 0.9rem) + 10px));
  overflow: hidden;
`;

const Description = styled.p``;

const PersonalityIconsWrapper = styled.div`
  width: 100%;
  height: 40px;
  margin: 5px;
`;
