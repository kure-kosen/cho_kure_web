import React from "react";
import styled from "styled-components";
import { CircleIconWrapper } from "@/icons/CircleIconWrapper";
import { color } from "@/constants/styles";

export const BarsCircleIcon = () => (
  <CircleIconWrapper>
    <i className="fas fa-bars fa-fw" />
  </CircleIconWrapper>
);

export const BarsIcon = () => (
  <StyledIcon>
    <i className="fas fa-bars fa-fw" />
  </StyledIcon>
);

const StyledIcon = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  color: ${color.BLUE};
`;
