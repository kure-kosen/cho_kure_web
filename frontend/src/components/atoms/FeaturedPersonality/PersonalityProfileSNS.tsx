import React from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import { TwitterIcon, FacebookIcon, InstagramIcon } from "@/icons";

export const PersonalityProfileSNS = ({
  twitter_id,
  facebook_id,
  instagram_id
}: Pick<IPersonality, "facebook_id" | "instagram_id" | "twitter_id">) => {
  return (
    <SNSArea>
      {twitter_id && <TwitterIcon id={twitter_id} />}
      {facebook_id && <FacebookIcon id={facebook_id} />}
      {instagram_id && <InstagramIcon id={instagram_id} />}
    </SNSArea>
  );
};

const SNSArea = styled.div`
  width: 100%;
  height: 100px;
`;
