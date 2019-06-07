import React from "react";
import styled from "styled-components";
import { Timeline } from "react-twitter-widgets";

import { color, heading } from "@/constants/styles";

export default () => (
  <TweetStreamStyle>
    <Title>Twitter</Title>
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: "cho_kure"
      }}
      options={{
        height: "600",
        chrome: "noheader nofooter"
      }}
    />
  </TweetStreamStyle>
);

const TweetStreamStyle = styled.div`
  width: 100%;
  padding: 0px 20px 10px 20px;
`;

const Title = styled.div`
  ${heading};
  color: ${color.BLUE};
`;
