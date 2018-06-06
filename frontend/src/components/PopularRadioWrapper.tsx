import * as React from "react";
import styled from "styled-components";
import { media } from "./../commons/StyleUtils";

export const PopularRadioWrapper = () => <PopularRadioWrapperStyle>popular-radio-wrapper</PopularRadioWrapperStyle>;

const PopularRadioWrapperStyle = styled.div`
  width: 100%;
  color: black;
  background-color: #f1f0ee;
  height: 400px;

  @media ${media.mobile} {
    display: none;
  }
`;
