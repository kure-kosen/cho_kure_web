import React from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import {
  TwitterCircleIcon,
  FacebookCircleIcon,
  InstagramCircleIcon
} from "@/icons";

export const PersonalityProfileSNS = ({
  twitterId,
  facebookId,
  instagramId
}: Pick<IPersonality, "facebookId" | "instagramId" | "twitterId">) => {
  return (
    <SNSArea>
      {twitterId && <TwitterCircleIcon id={twitterId} />}
      {facebookId && <FacebookCircleIcon id={facebookId} />}
      {instagramId && <InstagramCircleIcon id={instagramId} />}
    </SNSArea>
  );
};

const SNSArea = styled.div`
  height: 40px;
`;
