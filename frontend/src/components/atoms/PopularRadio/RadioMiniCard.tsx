import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";
import { IRadio } from "@/api/RadioApi";

type Props = Pick<IRadio, "title" | "image">;

export const RadioMiniCard: React.FC<Props> = ({ title, image }) => (
  <Wrapper>
    <ThumbnailWrapper>
      <RadioImg src={image} />
    </ThumbnailWrapper>
    <RadioProperties>
      <RadioTitle>{title}</RadioTitle>
    </RadioProperties>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
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
  flex: 0 0 70%;
`;

const RadioTitle = styled.span`
  color: ${color.ORANGE};
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
`;

// NOTE: DON'T REMOVE
// const RadioImg = styled.img`
//   width: 120px;
//   height: auto;
//   align-self: flex-start;
// `;

// NOTE: DON'T REMOVE
// const RadioTitle = styled.div`
//   color: ${color.ORANGE};
//   font-size: 1rem;
// `;

// NOTE: DON'T REMOVE
// const RadioDescription = styled.p`
//   color: ${color.GRAY};
//   font-size: 0.9rem;
//   margin-top: 6px;
//   text-indent: 0.9rem;
// `;
