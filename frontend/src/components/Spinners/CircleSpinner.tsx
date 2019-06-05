import React from "react";
import styled, { keyframes } from "styled-components";

import { color as colors } from "@/constants/styles";

interface IProps {
  size?: number;
  color?: string;
  isLoading?: boolean;
}

export default ({
  size = 35,
  color = colors.BLUE,
  isLoading = true
}: IProps) => {
  return isLoading ? (
    <Wrapper>
      <StyledSpinner size={size} color={color} />
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const clip = keyframes`
  0% {transform: rotate(0deg) scale(1)}
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`;

const StyledSpinner = styled.div<IProps>`
  background: transparent !important;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 100%;
  border: 2px solid;
  border-color: ${props => props.color};
  border-bottom-color: transparent;
  display: inline-block;
  animation: ${clip} 1.3s 0s infinite linear;
  animation-fill-mode: both;
`;
