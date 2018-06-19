import * as React from "react";
import styled from "styled-components";
import * as img from "./../../images/bg.jpg";

import { AboutText } from "./../components/AboutText";

export const AboutBottom = () => (
  <AboutBottomStyle>
    <AboutMaskStyle>
      <AboutText />
    </AboutMaskStyle>
  </AboutBottomStyle>
);

const AboutBottomStyle = styled.div`
  position: relative;
  width: auto;
  height: 70vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
`;

const AboutMaskStyle = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
