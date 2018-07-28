import * as React from "react";
import styled from "styled-components";
import { Timeline } from "react-twitter-widgets";
import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

export const TweetStream = () => (
  <TweetStreamStyle>
    <Title>Twitter</Title>
    <Timeline
      dataSource = {{
        sourceType: 'profile',
        screenName: 'cho_kure'
      }}
      options = {{
        height: '600',
        chrome: 'noheader nofooter'
      }}
    />
  </TweetStreamStyle>
);

const TweetStreamStyle = styled.div`
  width: 100%;
  padding: 0px 20px 10px 20px;
`;

const Title = styled.div`
  ${title};
  color: ${chkColors.blue};
`;
