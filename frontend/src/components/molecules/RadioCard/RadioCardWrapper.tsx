import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";

import RadioCard from "@/components/molecules/RadioCard/RadioCard";

import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";

interface IProps {
  radios: IRadio[];
}

export default (props: IProps) => {
  const { radios } = props;

  return (
    <Wrapper>
      {radios ? (
        <RadioCardsWrapper>
          {radios.slice(0, 8).map(radio => (
            <RadioCard key={radio.id} {...radio} />
          ))}
        </RadioCardsWrapper>
      ) : (
        <CircleSpinner />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const RadioCardsWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
