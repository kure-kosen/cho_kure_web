import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";
import { IPersonality } from "@/api/PersonalityApi";
import PersonalityListenToRadioButton from "@/components/atoms/FeaturedPersonality/PersonalityListenToRadioButton";

export const PersonalityProfileDescription = ({
  name,
  nickname,
  affiliation_name,
  affiliation_details
}: Pick<
  IPersonality,
  "name" | "nickname" | "affiliation_name" | "affiliation_details"
>) => (
  <Wrapper>
    <Name>{name}</Name>
    {nickname ? <NickName>{nickname}</NickName> : null}
    <Affiliation>
      <AffiliationLabel>{affiliation_name}</AffiliationLabel>
      <AffiliationLabel>{affiliation_details}</AffiliationLabel>
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
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
