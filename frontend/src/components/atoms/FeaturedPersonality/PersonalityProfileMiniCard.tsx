import React from "react";
import styled from "styled-components";

import { IPersonality } from "@/api/PersonalityApi";
import PersonalityIcon from "@/components/atoms/Features/PersonalityIcon";

type Props = Pick<IPersonality, "name" | "image">;

export const PersonalityProfileMiniCard = ({ name, image }: Props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <PersonalityIcon image={image} />
      </ImageWrapper>
      <NameWrapper>
        <Name>{name}</Name>
      </NameWrapper>
    </Wrapper>
  );
};

const height = "75px";

const Wrapper = styled.div`
  height: ${height};
  width: 100%;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 0 0 ${height};
  padding: 5px;
`;

const NameWrapper = styled.div`
  flex: 0 0 calc(100% - ${height});
  margin: 0 auto;
  padding-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Name = styled.span`
  font-size: 1rem;
  line-height: ${height};
  vertical-align: middle;
`;
