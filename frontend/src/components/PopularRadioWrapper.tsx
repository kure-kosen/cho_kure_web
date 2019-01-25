import * as React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

import { PopularRadioCard } from "./PopularRadioCard";

export const PopularRadioWrapper = () => (
  <PopularRadioWrapperStyle>
    <Title>popular radio</Title>
    <PopularRadioCardWrapper>
      <PopularRadioCard />
      <PopularRadioCard />
      <PopularRadioCard />
    </PopularRadioCardWrapper>
  </PopularRadioWrapperStyle>
);

const PopularRadioWrapperStyle = styled.div`
  width: 100%;
  color: white;
  background-color: ${chkColors.white};
  height: auto;
`;

const Title = styled.div`
  ${title};
  color: ${chkColors.blue};
  padding: 10px 20px;
`;

const PopularRadioCardWrapper = styled.div`
  width: auto;
  height: auto;
`;
