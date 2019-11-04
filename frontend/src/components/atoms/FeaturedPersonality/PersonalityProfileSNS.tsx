import React from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import { TwitterIcon, FacebookIcon, InstagramIcon } from "@/icons";

export const PersonalityProfileSNS = ({
  twitterId,
  facebookId,
  instagramId
}: Pick<IPersonality, "facebookId" | "instagramId" | "twitterId">) => {
  return (
    <SNSArea>
      {twitterId && <TwitterIcon id={twitterId} />}
      {facebookId && <FacebookIcon id={facebookId} />}
      {instagramId && <InstagramIcon id={instagramId} />}
    </SNSArea>
  );
};

const SNSArea = styled.div`
  width: 100%;
  height: 100px;
`;
