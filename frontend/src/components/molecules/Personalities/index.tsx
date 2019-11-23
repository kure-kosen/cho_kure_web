import React from "react";
import styled from "styled-components";

import { device } from "@/constants/styles";
import { IPersonality } from "@/api/PersonalityApi";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";
import { PersonalityCard } from "@/components/molecules/Personalities/Card";
import { TileCardsWrapper } from "@/components/molecules/Cards/TileCardsWrapper";
import { PersonalityProfileMiniCard } from "@/components/atoms/FeaturedPersonality/PersonalityProfileMiniCard";

interface Props {
  personalities: IPersonality[];
}

export default ({ personalities }: Props) => {
  if (!personalities) {
    return (
      <Wrapper>
        <CircleSpinner />
      </Wrapper>
    );
  }

  return (
    <>
      <device.Default>
        <TileCardsWrapper>
          {personalities.map(personality => (
            <PersonalityCard key={personality.id} {...personality} />
          ))}
        </TileCardsWrapper>
      </device.Default>
      <device.ForMobile>
        <MobileWrapper>
          {personalities.map(({ id, name, image }) => (
            <PersonalityProfileMiniCard key={id} name={name} image={image} />
          ))}
        </MobileWrapper>
      </device.ForMobile>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const MobileWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
`;
