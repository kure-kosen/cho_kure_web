import React, { FC } from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import PlayButton from "@/components/atoms/RadioCard/RadioCardPlayButton";
import { StyledBorderContaineImage } from "@/components/atoms/ContainImage";

export const RadioPlayer: FC<
  Pick<IRadio, "mp3" | "duration" | "playTime" | "image">
> = ({ mp3, duration, playTime, image }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <PlayButtonWrapper>
        <PlayButton mp3={mp3} duration={duration} playTime={playTime} />
      </PlayButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Image = styled(StyledBorderContaineImage)`
  max-height: 300px;
`;

const PlayButtonWrapper = styled.div`
  background-color: ${color.SKY_BLUE};
  margin-top: -3px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
