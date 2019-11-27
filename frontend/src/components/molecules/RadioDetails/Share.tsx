import React, { FC } from "react";
import styled from "styled-components";
import { color } from "@/constants/styles";

import {
  TwitterShare,
  FacebookShare,
  LineShare
} from "@/components/atoms/ShareButton";

interface Props {
  url: string;
  text: string;
}

export const Share: FC<Props> = ({ url, text }) => {
  return (
    <Wrapper>
      <Title>SNSでシェアする</Title>
      <Buttons>
        <TwitterShare text={text} url={url} />
        <FacebookShare text={text} url={url} />
        <LineShare text={text} url={url} />
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.h3`
  color: ${color.BLUE};
`;

const Buttons = styled.div`
  display: flex;

  > div {
    margin-right: 10px;
  }
`;
