import React from "react";
import styled from "styled-components";

import * as img from "./../../images/hero.jpg";

export interface IProps {
  InnerComponent: string | React.ReactNode;
}

export const HeroArea = (props: IProps) => <HeroAreaStyle>{props.InnerComponent}</HeroAreaStyle>;

const HeroAreaStyle = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(-60deg, rgba(204, 224, 244, 0.4), rgba(0, 117, 190, 0.4), rgba(118, 220, 151, 0.4)),
    url(${img});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 500px;
    opacity: 0.4;
    background: #fff;
    z-index: 2;
  }
`;
