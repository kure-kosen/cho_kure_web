import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { IPersonality } from "@/api/PersonalityApi";
import { PersonalityProfileSNS } from "@/components/atoms/FeaturedPersonality/PersonalityProfileSNS";

interface Props
  extends Pick<
    IPersonality,
    "description" | "facebookId" | "instagramId" | "twitterId"
  > {
  visible: boolean;
}

export const PersonalityProfileModal = ({
  visible,
  description,
  twitterId,
  facebookId,
  instagramId
}: Props) => {
  return (
    <Wrapper visible={visible}>
      <DescriptionArea>
        <ReactMarkdown source={description} />
      </DescriptionArea>
      {(twitterId || facebookId || instagramId) && (
        <PersonalityProfileSNS
          twitterId={twitterId}
          facebookId={facebookId}
          instagramId={instagramId}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
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
  overflow-y: scroll;
`;

const DescriptionArea = styled.div``;
