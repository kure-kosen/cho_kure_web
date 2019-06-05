import React from "react";
import styled from "styled-components";

import { title, goodSpace } from "./../commons/style";
import { color } from "@/constants/styles";

import MoreButton from "./MoreButton";
import { RadioCardWrapper } from "./../components/RadioCardWrapper";
import { RadioHistoryFeature } from "./../components/RadioHistoryFeature";

export const RadioHistoryContentWrapper = () => (
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
      <RadioCardsWrapper>
        <RadioCardWrapper />
        <RadioCardWrapper />
        <RadioCardWrapper />
      </RadioCardsWrapper>
      <RadioCardsWrapper>
        <RadioCardWrapper />
        <RadioCardWrapper />
        <RadioCardWrapper />
      </RadioCardsWrapper>
      <RadioCardsWrapper>
        <RadioCardWrapper />
        <RadioCardWrapper />
        <RadioCardWrapper />
      </RadioCardsWrapper>
      <MoreButton to="" />
    </RadioHistoryContentArea>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const RadioHistoryContentArea = styled.div`
  margin: 0 50px 50px 50px;
`;

const Title = styled.div`
  ${title}
  color: ${color.GRAY};
  text-align: center;
  margin-bottom: 20px;
`;

const RadioDateButtonWrapper = styled.div`
  ${goodSpace}
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

const RadioCardsWrapper = styled.div`
  ${goodSpace}
  margin: 0 auto 20px auto;
`;
