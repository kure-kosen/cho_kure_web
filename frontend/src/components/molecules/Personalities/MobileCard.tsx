import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import { color } from "@/constants/styles";
import { PersonalityProfileAvatar } from "@/components/atoms/FeaturedPersonality/PersonalityProfileAvatar";
import { PersonalityProfileDescription } from "@/components/atoms/FeaturedPersonality/PersonalityProfileDescription";
import { PersonalityProfileSNS } from "@/components/atoms/FeaturedPersonality/PersonalityProfileSNS";
import { Tag } from "@/components/atoms/Tag";

interface Props {
  personality: IPersonality;
}

export const PersonalityMobileCard: FC<Props> = ({ personality }) => {
  const {
    image,
    name,
    nickname,
    organization,
    position,
    description,
    twitterId,
    facebookId,
    instagramId,
    tagList
  } = personality;
  return (
    <Wrapper>
      <PersonalityProfileAvatar image={image} />
      <PersonalityProfileDescription
        name={name}
        nickname={nickname}
        organization={organization}
        position={position}
      />
      <div>
        {/* <ReactMarkdown source={description} /> */}
        <DescriptionArea>
          <ReactMarkdown source={description} />
        </DescriptionArea>
        {tagList && (
          <Tags>
            {tagList.map(tag => (
              <Tag tag={tag} />
            ))}
          </Tags>
        )}
        {(twitterId || facebookId || instagramId) && (
          <PersonalityProfileSNSWrapper>
            <PersonalityProfileSNS
              twitterId={twitterId}
              facebookId={facebookId}
              instagramId={instagramId}
            />
          </PersonalityProfileSNSWrapper>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  height: auto;
  margin: 0 auto 30px auto;
  color: ${color.BLACK};
  border-radius: 8px;
  font-weight: bold;
  border: 3px solid ${color.SKY_BLUE};
  background-color: ${color.WHITE};
  box-shadow: 4px 3px 10px 0px ${color.SHADOW};
  position: relative;
`;

const DescriptionArea = styled.div`
  padding: 0 30px;
`;

const Tags = styled.div`
  margin: 5px;
  li {
    margin: 0 5px;
  }
`;

const PersonalityProfileSNSWrapper = styled.div`
  width: 100;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
