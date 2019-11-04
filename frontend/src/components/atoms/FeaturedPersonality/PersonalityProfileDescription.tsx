import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";
import { IPersonality } from "@/api/PersonalityApi";
import PersonalityListenToRadioButton from "@/components/atoms/FeaturedPersonality/PersonalityListenToRadioButton";

export const PersonalityProfileDescription = ({
  name,
  nickname,
  affiliationName,
  affiliationDetails
}: Pick<
  IPersonality,
  "name" | "nickname" | "affiliationName" | "affiliationDetails"
>) => (
  <Wrapper>
    <Name>{name}</Name>
    {nickname ? <NickName>{nickname}</NickName> : null}
    <Affiliation>
      <AffiliationLabel>{affiliationName}</AffiliationLabel>
      <AffiliationLabel>{affiliationDetails}</AffiliationLabel>
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
  margin-bottom: 1rem;
`;

const AffiliationLabel = styled.p`
  margin: 0.2rem;
  height: 1rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
