import React from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";
import { PersonalityCard } from "@/components/molecules/Personalities/Card";
import { TileCardsWrapper } from "@/components/molecules/Cards/TileCardsWrapper";

interface IProps {
  personalities: IPersonality[];
}

export default (props: IProps) => {
  const { personalities } = props;

  if (!personalities) {
    return (
      <Wrapper>
        <CircleSpinner />
      </Wrapper>
    );
  }

  return (
    <TileCardsWrapper>
      {personalities.map(personality => (
        <PersonalityCard key={personality.id} {...personality} />
      ))}
    </TileCardsWrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
