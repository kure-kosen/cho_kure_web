import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";

import RadioCard from "@/components/molecules/RadioCard/RadioCard";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";
import { AwesomeCardsWrapper } from "@/components/molecules/Cards/AwesomeCardsWrapper";

interface IProps {
  radios?: IRadio[];
}

export default (props: IProps) => {
  const { radios } = props;

  if (!radios) {
    return (
      <Wrapper>
        <CircleSpinner />
      </Wrapper>
    );
  }

  return (
    <AwesomeCardsWrapper>
      {radios.map(radio => (
        <RadioCard key={radio.id} {...radio} />
      ))}
    </AwesomeCardsWrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
