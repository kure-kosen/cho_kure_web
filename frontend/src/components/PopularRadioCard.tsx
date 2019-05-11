import * as React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";

interface IProps {
  title: string;
  img: string;
  description: string;
}

export const PopularRadioCard = (props: IProps) => (
  <Wrapper>
    <RadioImg src={props.img} />
    <RadioProperties>
      <RadioTitle>{props.title}</RadioTitle>
      <RadioDescription>{props.description}</RadioDescription>
    </RadioProperties>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 120px;
  display: flex;
`;

const RadioImg = styled.img`
  width: 120px;
  height: auto;
  align-self: flex-start;
`;

const RadioProperties = styled.div`
  height: auto;
`;

const RadioTitle = styled.div`
  color: ${chkColors.orange};
  font-size: 1rem;
`;

const RadioDescription = styled.p`
  color: ${chkColors.gray};
  font-size: 0.9rem;
  margin-top: 6px;
  text-indent: 0.9rem;
`;
