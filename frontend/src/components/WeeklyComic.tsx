import * as React from "react";
import styled from "styled-components";

import * as comic from "./../../images/WeeklyComic.jpg";

export const WeeklyComic = () => (
  <WeeklyComicStyle>
    <PictureArea />
  </WeeklyComicStyle>
);

const WeeklyComicStyle = styled.div`
  width: 100%;
  color: white;
  background-color: #333333;
  height: 600px;
`;

const PictureArea = styled.div`
  background-image: url(${comic});
  width: 100%;
  height: 100%;
`;
