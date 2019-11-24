import React from "react";
import styled from "styled-components";
import { device } from "@/constants/styles";

// import img from "./hero.jpg";
import effectedHeroImage from "./effectedHeroImage.png";

export interface Props {
  children: string | React.ReactNode;
}

export const HeroArea = ({ children }: Props) => (
  <HeroAreaStyle>{children}</HeroAreaStyle>
);

export const ResponsibleHeroArea = ({ children }: Props) => (
  <>
    <device.Default>
      <HeroAreaWrapepr>
        <HeroAreaStyle>{children}</HeroAreaStyle>
      </HeroAreaWrapepr>
    </device.Default>

    <device.ForMobile>
      <HeroAreaMobileWrapepr>
        <HeroAreaStyle>{children}</HeroAreaStyle>
      </HeroAreaMobileWrapepr>
    </device.ForMobile>
  </>
);

const HeroAreaStyle = styled.div`
  width: 100%;
  height: 100%;
  /* background: linear-gradient(
      -60deg,
      rgba(204, 224, 244, 0.4),
      rgba(0, 117, 190, 0.4),
      rgba(118, 220, 151, 0.4)
    ),
    url({img}); */
  background: url(${effectedHeroImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  /* :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 500px;
    opacity: 0.4;
    background: #fff;
    z-index: 2;
  } */
`;

const HeroAreaWrapepr = styled.div`
  height: 500px;
  width: 100%;
`;

const HeroAreaMobileWrapepr = styled.div`
  height: 250px;
  width: 100%;
`;
