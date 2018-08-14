import * as React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

export const PopularRadioWrapper = () => (
  <PopularRadioWrapperStyle>
    <Title>popular radio</Title>
    
    <PopularRadioMoreButton>more</PopularRadioMoreButton>
  </PopularRadioWrapperStyle>
);

const PopularRadioWrapperStyle = styled.div`
  width: 100%;
  color: white;
  background-color: ${chkColors.white};
  height: 400px;
`;

const Title = styled.div`
  ${title};
  color: ${chkColors.blue};
  padding: 0 20px;
`;

const PopularRadioMoreButton = ChkButtonBase.extend`
  background-color: ${chkColors.orange};
  width: 90px;
  height: 48px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;
