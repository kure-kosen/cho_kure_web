import * as React from "react";
//import styled from "styled-components";
import { Timeline } from "react-twitter-widgets";

export const TweetStream = () => (
  <Timeline
    dataSource = {{
      sourceType: 'profile',
      screenName: 'cho_kure'
    }}
    options = {{
      //username: 'cho_kure',
      width: '100%',
      height: '400px',
      chrome: 'noheader nofooter noborders'
    }}
  />
);

/*const TweetStreamStyle = styled.div`
  width: 100%;
  color: gray;
  background-color: #fff200;
  height: 400px;
`;*/
