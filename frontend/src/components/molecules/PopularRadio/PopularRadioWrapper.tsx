import React from "react";
import styled from "styled-components";

import { color, heading } from "@/constants/styles";

import sidebarRadioImg from "./sidebar-radio-img.png";

import MoreButton from "@/components/atoms/Buttons/MoreButton";
import Card from "@/components/atoms/PopularRadio/Card";

export default () => (
  <PopularRadioWrapperStyle>
    <Title>popular radio</Title>
    <PopularRadioCardWrapper>
      <Card
        title="#50 ヤマトーーク!"
        img={sidebarRadioImg}
        description="エナジードリンク、お年玉の使い道、登山、Advent Calendar、エディタ、LTalksなどの話をしました。"
      />
      <Card
        title="#50 ヤマトーーク!"
        img={sidebarRadioImg}
        description="エナジードリンク、お年玉の使い道、登山、Advent Calendar、エディタ、LTalksなどの話をしました。"
      />
      <Card
        title="#50 ヤマトーーク!"
        img={sidebarRadioImg}
        description="エナジードリンク、お年玉の使い道、登山、Advent Calendar、エディタ、LTalksなどの話をしました。"
      />
    </PopularRadioCardWrapper>
    <MoreButton to="/radios" />
  </PopularRadioWrapperStyle>
);

const PopularRadioWrapperStyle = styled.div`
  width: 100%;
  color: ${color.WHITE};
  background-color: ${color.WHITE};
  height: auto;
`;

const Title = styled.div`
  ${heading}
  color: ${color.BLUE};
  padding: 10px 20px;
`;

const PopularRadioCardWrapper = styled.div`
  width: auto;
  height: auto;
`;
