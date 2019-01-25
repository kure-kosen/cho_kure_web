import * as React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

import * as sidebarRadioImg from "./../../images/sidebar-radio-img.png";
import { PopularRadioCard } from "./PopularRadioCard";

export const PopularRadioWrapper = () => (
  <PopularRadioWrapperStyle>
    <Title>popular radio</Title>
    <PopularRadioCardWrapper>
      <PopularRadioCard
        title="#50 ヤマトーーク!"
        img={sidebarRadioImg}
        description="エナジードリンク、お年玉の使い道、登山、Advent Calendar、エディタ、LTalksなどの話をしました。"
      />
      <PopularRadioCard
        title="#50 ヤマトーーク!"
        img={sidebarRadioImg}
        description="エナジードリンク、お年玉の使い道、登山、Advent Calendar、エディタ、LTalksなどの話をしました。"
      />
      <PopularRadioCard
        title="#50 ヤマトーーク!"
        img={sidebarRadioImg}
        description="エナジードリンク、お年玉の使い道、登山、Advent Calendar、エディタ、LTalksなどの話をしました。"
      />
    </PopularRadioCardWrapper>
  </PopularRadioWrapperStyle>
);

const PopularRadioWrapperStyle = styled.div`
  width: 100%;
  color: white;
  background-color: ${chkColors.white};
  height: auto;
`;

const Title = styled.div`
  ${title};
  color: ${chkColors.blue};
  padding: 10px 20px;
`;

const PopularRadioCardWrapper = styled.div`
  width: auto;
  height: auto;
`;
