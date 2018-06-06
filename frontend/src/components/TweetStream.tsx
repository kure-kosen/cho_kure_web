import * as React from "react";
import styled from "styled-components";
import { media } from "./../commons/StyleUtils";

export const TweetStream = () => <TweetStreamStyle>tweet-stream</TweetStreamStyle>;

const TweetStreamStyle = styled.div`
  width: 100%;
  color: gray;
  background-color: #fff200;
  height: 400px;

  @media ${media.mobile} {
    display: none;
  }
`;
