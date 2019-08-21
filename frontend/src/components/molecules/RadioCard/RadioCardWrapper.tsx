import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { useCalculateItems } from "@/utils/hooks/useCalculateItems";

import RadioCard, {
  RADIO_CARD_WIDTH
} from "@/components/molecules/RadioCard/RadioCard";
import RadioCardSpacer from "@/components/molecules/RadioCard/RadioCardSpacer";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";

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

  const [radioCardsWrapperRef, cards] = useCalculateItems({
    width: RADIO_CARD_WIDTH,
    length: radios.length
  });

  return (
    <Wrapper>
      <RadioCardsWrapper ref={radioCardsWrapperRef}>
        {radios.map(radio => (
          <RadioCard key={radio.id} {...radio} />
        ))}
        {[...Array(cards).keys()].map(i => (
          <RadioCardSpacer key={i} />
        ))}
      </RadioCardsWrapper>
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
