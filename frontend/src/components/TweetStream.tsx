import * as React from "react";
import { Timeline } from "react-twitter-widgets";

export const TweetStream = () => (
  <Timeline
    dataSource = {{
      sourceType: 'profile',
      screenName: 'cho_kure'
    }}
    options = {{
      width: '100%',
      height: '400',
      chrome: 'noheader nofooter noborders'
    }}
  />
);
