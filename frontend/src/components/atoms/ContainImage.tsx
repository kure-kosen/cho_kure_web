import React, { FC } from "react";
import styled from "styled-components";
import { color } from "@/constants/styles";

interface Props {
  image: string;
}

export const ContaineImage: FC<Props> = ({ image }) => {
  return <StyledContaineImage src={image} />;
};

const StyledContaineImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const BorderContaineImage: FC<Props> = ({ image }) => {
  return <StyledBorderContaineImage src={image} />;
};

export const StyledBorderContaineImage = styled(StyledContaineImage)`
  && {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-top: 3px solid ${color.SKY_BLUE};
    border-left: 3px solid ${color.SKY_BLUE};
    border-right: 3px solid ${color.SKY_BLUE};
    border-bottom: 3px solid ${color.SKY_BLUE};
  }
`;
