import * as React from "react";
import styled from "styled-components";
import { media } from "./../commons/StyleUtils";

export const WeeklyComic = () => <WeeklyComicStyle>weekly-comic</WeeklyComicStyle>;

const WeeklyComicStyle = styled.div`
  width: 100%;
  color: white;
  background-color: #333333;
  height: 600px;

  @media ${media.mobile} {
    display: none;
  }
`;
