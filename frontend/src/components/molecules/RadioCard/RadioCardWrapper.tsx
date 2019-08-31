import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";

import RadioCard, {
  RADIO_CARD_WIDTH
} from "@/components/molecules/RadioCard/RadioCard";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";
import { CardsHOC } from "@/components/molecules/Cards/CardsHOC";

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

  return CardsHOC({
    CardComponent: RadioCard,
    data: radios,
    width: RADIO_CARD_WIDTH,
    defaultProps: {
      mp3: {
        url: ""
      },
      personalities: []
    }
  });
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
