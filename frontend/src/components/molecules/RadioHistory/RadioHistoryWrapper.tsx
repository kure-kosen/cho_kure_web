import React from "react";
import styled from "styled-components";

import { color, heading } from "@/constants/styles";

import MoreButton from "@/components/atoms/Buttons/MoreButton";
import RadioHistoryFeature from "@/components/atoms/RadioHistory/RadioHistoryFeature";
import RadioCard from "@/components/molecules/RadioCard/RadioCard";
import { TileCardsWrapper } from "@/components/molecules/Cards/TileCardsWrapper";

import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";

import { IRadio } from "@/api/RadioApi";

interface IProps {
  radios?: IRadio[];
}

export const RadioHistoryWrapper = (props: IProps) => {
  const { radios } = props;

  if (!radios) {
    return (
      <Wrapper>
        <CircleSpinner />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <RadioHistoryFeature />
      <RadioHistoryContentArea>
        <Title>category</Title>
        <RadioDateButtonWrapper>
          <RadioDateButton name="201804" type="button">
            2018/04
          </RadioDateButton>
          <RadioDateButton name="201803" type="button">
            2018/03
          </RadioDateButton>
          <RadioDateButton name="201802" type="button">
            2018/02
          </RadioDateButton>
          <RadioDateButton name="201801" type="button">
            2018/01
          </RadioDateButton>
        </RadioDateButtonWrapper>
        <TileCardsWrapper>
          {radios.map(radio => (
            <RadioCard key={radio.id} {...radio} />
          ))}
        </TileCardsWrapper>
        <MoreButton to="" />
      </RadioHistoryContentArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const RadioHistoryContentArea = styled.div`
  margin: 0 50px 50px 50px;
`;

const Title = styled.div`
  ${heading}
  color: ${color.GRAY};
  text-align: center;
  margin-bottom: 20px;
`;

const RadioDateButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  margin: 0 auto 20px auto;
`;

const RadioDateButton = styled.button`
  display: block;
  padding: 5px 1rem;
  line-height: 1.5rem;
  color: ${color.GRAY};
  background-color: #fff;
  border: 2px solid ${color.BLUE};
  border-radius: 1.5rem;
  outline: none;
`;
