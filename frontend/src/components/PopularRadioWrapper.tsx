import * as React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

import * as radioCardImg from "./../../images/radiocard_img.png"

export const PopularRadioWrapper = () => (
  <PopularRadioWrapperStyle>
    <Title>popular radio</Title>
    
    <PopularRadioCardWrapper>
      <PopularRadioCard>
        <RadioImg src={radioCardImg}/>
        <RadioText>
          <RadioTitle>飲食店バグハンター</RadioTitle>
          <RadioDescript>
            最近やっていること、Ruby25周年、else if、コードゴルフ…
          </RadioDescript>
        </RadioText>
      </PopularRadioCard>
    </PopularRadioCardWrapper>
    
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

const PopularRadioCardWrapper = styled.div `
  width: auto;
  height: auto;
`;

const RadioText = styled.span `
`;
const PopularRadioCard = styled.div `
  width: 100%;
  display: flex;
`;

const RadioDescript = styled.p`
  width: auto;
  height: auto;
  color: ${chkColors.gray};
`;

const RadioImg = styled.img`
  width: auto;
  height: 100px;
`;

const RadioTitle = styled.div `
  font-size: 18px;
  color: ${chkColors.orange};
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
