import * as React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
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
      <PopularRadioCard>
        <RadioImg src={radioCardImg}/>
        <RadioText>
          <RadioTitle>飲食店バグハンター</RadioTitle>
          <RadioDescript>
            最近やっていること、Ruby25周年、else if、コードゴルフ…
          </RadioDescript>
        </RadioText>
      </PopularRadioCard>
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
  padding: 10px 20px;
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
  font-size: 14px;
`;

const RadioImg = styled.img`
  width: auto;
  height: 120px;
  padding: 10px 10px;
`;

const RadioTitle = styled.div `
  font-size: 16px;
  color: ${chkColors.orange};
`;