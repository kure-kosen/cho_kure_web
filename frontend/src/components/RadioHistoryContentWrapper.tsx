import * as React from "react";
import styled from "styled-components";

import { title, goodSpace } from "./../commons/style";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

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
      <MoreButton type="button">more</MoreButton>
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
  ${title};
  color: ${chkColors.gray};
  text-align: center;
  margin-bottom: 20px;
`;

const RadioDateButtonWrapper = styled.div`
  width: 45%;
  margin: 0 auto 20px auto;
  ${goodSpace};
`;

const RadioDateButton = styled.button`
  display: block;
  padding: 5px 1rem;
  line-height: 1.5rem;
  color: ${chkColors.gray};
  background-color: #fff;
  border: 2px solid ${chkColors.blue};
  border-radius: 1.5rem;
  outline: none;
`;

const RadioCardsWrapper = styled.div`
  margin: 0 auto 20px auto;
  ${goodSpace};
`;

const MoreButton = ChkButtonBase.extend`
  margin: 20px auto 0 auto;
  padding: 5px 1rem;
  width: 20%;
  line-height: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${chkColors.orange};
`;
