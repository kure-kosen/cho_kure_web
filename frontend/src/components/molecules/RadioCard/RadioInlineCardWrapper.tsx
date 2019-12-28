import React, { FC } from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { RadioInlineCard } from "./RadioInlineCard";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";

interface Props {
  radios?: IRadio[];
}

export const RadioInlineCardWrapper: FC<Props> = ({ radios }) => {
  if (!radios) {
    return (
      <Wrapper>
        <CircleSpinner />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {radios.map(radio => (
        <RadioInlineCard key={radio.id} radio={radio} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
