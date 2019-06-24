import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { IPersonality } from "@/api/PersonalityApi";
import SNS from "@/components/atoms/FeaturedPersonality/SNS";

interface IProps
  extends Pick<
    IPersonality,
    "description" | "facebook_id" | "instagram_id" | "twitter_id"
  > {
  visible: boolean;
}

export default ({
  visible,
  description,
  twitter_id,
  facebook_id,
  instagram_id
}: IProps) => (
  <Wrapper visible={visible}>
    <ReactMarkdown source={description} />
    {(twitter_id || facebook_id || instagram_id) && (
      <SNS
        twitter_id={twitter_id}
        facebook_id={facebook_id}
        instagram_id={instagram_id}
      />
    )}
  </Wrapper>
);

const Wrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: calc(305px - 30px);
  margin: 15px;
  margin-bottom: 100px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  font-size: 1.1rem;
  line-height: 1.8rem;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`;
