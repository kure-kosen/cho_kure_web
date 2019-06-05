import React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { color } from "@/constants/styles";

import comic from "./../../images/WeeklyComic.jpg";

export const WeeklyComic = () => (
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
  ${title};
  color: ${color.BLUE};
  padding: 0 20px;
`;

const PictureArea = styled.img`
  width: 100%;
  height: auto;
`;
