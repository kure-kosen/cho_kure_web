import * as React from "react";
import styled from "styled-components";

import { title, goodSpace } from "./../commons/style";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

import { RadioCardWrapper } from "./../components/RadioCardWrapper";

const hero = "http://localhost:5000/images/radio-history-hero.png";

export const RadioHistoryContentWrapper = () => (
  <Wrapper>
    <RadioHistoryHeroArea />
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
      <RadioCardsWapper>
        <RadioCardWrapper />
        <RadioCardWrapper />
        <RadioCardWrapper />
      </RadioCardsWapper>
      <RadioCardsWapper>
        <RadioCardWrapper />
        <RadioCardWrapper />
        <RadioCardWrapper />
      </RadioCardsWapper>
      <RadioCardsWapper>
        <RadioCardWrapper />
        <RadioCardWrapper />
        <RadioCardWrapper />
      </RadioCardsWapper>
      <MoreButton type="button">more</MoreButton>
    </RadioHistoryContentArea>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const RadioHistoryHeroArea = styled.div`
  height: 600px;
  background-image: url(${hero});
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const RadioHistoryContentArea = styled.div`
  margin: 0 100px 50px 100px;
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

const RadioCardsWapper = styled.div`
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
