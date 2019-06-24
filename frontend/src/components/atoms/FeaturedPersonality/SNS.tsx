import React from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";

import TwitterIcon from "@/components/atoms/Icons/TwitterIcon";
import FacebookIcon from "@/components/atoms/Icons/FacebookIcon";
import InstagramIcon from "@/components/atoms/Icons/InstagramIcon";

export default ({
  twitter_id,
  facebook_id,
  instagram_id
}: Pick<IPersonality, "facebook_id" | "instagram_id" | "twitter_id">) => (
  <SNSArea>
    {twitter_id && <TwitterIcon />}
    {facebook_id && <FacebookIcon />}
    {instagram_id && <InstagramIcon />}
  </SNSArea>
);

const SNSArea = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 35px;
`;
