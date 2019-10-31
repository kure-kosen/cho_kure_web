import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";
import { IPersonality } from "@/api/PersonalityApi";
import PersonalityListenToRadioButton from "@/components/atoms/FeaturedPersonality/PersonalityListenToRadioButton";

export const PersonalityProfileDescription = ({
  name,
  nickname
}: Pick<IPersonality, "name" | "nickname">) => (
  <Wrapper>
    <Name>{name}</Name>
    {nickname ? <NickName>{nickname}</NickName> : null}
    <Affiliation>
      呉高専工業高等専門学校専攻科
      <br />
      プロジェクトデザイン工学専攻
    </Affiliation>
    <PersonalityListenToRadioButton />
  </Wrapper>
);

const Wrapper = styled.div`
  height: auto;
  padding: 20px 30px;
`;

const Name = styled.span`
  font-size: 1.2rem;
  color: ${color.BLACK};
`;

const NickName = styled.span`
  font-size: 0.8rem;
  color: ${color.BLUE};
  margin-left: 20px;
  line-height: 1.25rem;
  vertical-align: bottom;
`;

const Affiliation = styled.div`
  padding: 15px 8px;
  line-height: 1.5rem;
`;
