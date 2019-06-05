import React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

import comic from "./../../images/WeeklyComic.jpg";

export const WeeklyComic = () => (
  <WeeklyComicStyle>
    <Title>this week</Title>
    <PictureArea src={comic} />
  </WeeklyComicStyle>
);

const WeeklyComicStyle = styled.div`
  width: 100%;
  color: white;
  background-color: ${chkColors.white};
  height: auto;
`;

const Title = styled.div`
  ${title};
  color: ${chkColors.blue};
  padding: 0 20px;
`;

const PictureArea = styled.img`
  width: 100%;
  height: auto;
`;
