import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

import RadioCardPlayButton from "@/components/atoms/RadioCard/RadioCardPlayButton";

interface Props {
  radio: IRadio;
}

export const RadioInlineCard: FC<Props> = ({ radio }) => {
  const { id, title, mp3, duration, image, playTime } = radio;

  return (
    <Wrapper>
      <ThumbnailWrapper>
        <RadioImg src={image} />
      </ThumbnailWrapper>
      <RadioProperties>
        <Link to={`/radios/${id}`}>
          <RadioTitleWrapper>
            <RadioTitle>{title}</RadioTitle>
          </RadioTitleWrapper>
        </Link>
        <RadioCardPlayButton {...{ mp3, duration, playTime }} />
      </RadioProperties>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  padding: 5px 0;
  display: flex;
  border: 1px solid ${color.FaintGray};
  border-left-width: 0;
  border-right-width: 0;
`;

const ThumbnailWrapper = styled.div`
  flex: 0 0 30%;
`;

const RadioImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const RadioProperties = styled.div`
  height: 100%;
  display: flex;
  flex: 0 0 70%;
  flex-direction: column;
  justify-content: space-around;
`;

const RadioTitleWrapper = styled.div`
  display: flex;
  height: 20px;
`;

const RadioTitle = styled.h3`
  color: ${color.BLUE};
  height: 100%;
  margin: 0;
  display: inline-flex;
  justify-content: flex-start;
  align-items: left;
  font-size: 1rem;
`;
