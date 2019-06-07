import React from "react";
import styled from "styled-components";

import { color, heading } from "@/constants/styles";

import comic from "./WeeklyComic.jpg";

export default () => (
  <WeeklyComicStyle>
    <Title>this week</Title>
    <PictureArea src={comic} />
  </WeeklyComicStyle>
);

const WeeklyComicStyle = styled.div`
  width: 100%;
  color: ${color.WHITE};
  background-color: ${color.WHITE};
  height: auto;
`;

const Title = styled.div`
  ${heading};
  color: ${color.BLUE};
  padding: 0 20px;
`;

const PictureArea = styled.img`
  width: 100%;
  height: auto;
`;
