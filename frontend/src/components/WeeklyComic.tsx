import * as React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

import * as comic from "./../../images/WeeklyComic.jpg";

export const WeeklyComic = () => (
  <WeeklyComicStyle>
    <Title>this week</Title>
    <PictureArea />
  </WeeklyComicStyle>
);

const WeeklyComicStyle = styled.div`
  width: 100%;
  color: white;
  background-color: ${chkColors.white};
  height: 600px;
  padding: 0 20px;
`;

const Title = styled.div`
  ${title};
  color: ${chkColors.blue};
`;

const PictureArea = styled.div`
  background-image: url(${comic});
  width: 80%;
  height: 80%;
  background-size: cover;
`;
