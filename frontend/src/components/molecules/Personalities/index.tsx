import React from "react";
import styled from "styled-components";

import useCalculateItems from "@/utils/hooks/useCalculateItems";

import { IPersonality } from "@/api/PersonalityApi";
import PersonalityCard from "@/components/molecules/Personalities/Card";
import DummyPersonalityCard from "@/components/molecules/Personalities/DummyCard";

interface IProps {
  personalities: IPersonality[];
}

export default (props: IProps) => {
  const { personalities } = props;

  const [ref, cards] = useCalculateItems({
    width: 350,
    length: personalities.length
  });

  return (
    <Wrapper>
      <PersonalitiesCardsWrapper ref={ref}>
        {personalities.map(personality => (
          <PersonalityCard key={personality.id} {...personality} />
        ))}
        {[...Array(cards).keys()].map(i => (
          <DummyPersonalityCard key={i} />
        ))}
      </PersonalitiesCardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const PersonalitiesCardsWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
