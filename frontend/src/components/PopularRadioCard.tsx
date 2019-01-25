import * as React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";

import * as sidebarRadioImg from "./../../images/sidebar-radio-img.png";

export const PopularRadioCard = () => (
  <Wrapper>
    <RadioImg src={sidebarRadioImg} />
    <RadioProperties>
      <RadioTitle>#50 ヤマトーーク!</RadioTitle>
      <RadioDescript>
        エナジードリンク、お年玉の使い道、登山、Advent Calendar、エディタ、LTalksなどの話をしました。
      </RadioDescript>
    </RadioProperties>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 120px;
  display: flex;
`;

const RadioImg = styled.img`
  width: 120px;
  height: auto;
  align-self: flex-start;
`;

const RadioProperties = styled.div`
  height: auto;
`;

const RadioTitle = styled.div`
  color: ${chkColors.orange};
  font-size: 1rem;
`;

const RadioDescript = styled.p`
  color: ${chkColors.gray};
  font-size: 0.9rem;
  margin-top: 6px;
  text-indent: 0.9rem;
`;
