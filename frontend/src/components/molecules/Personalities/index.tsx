import React from "react";
import styled from "styled-components";

import { device } from "@/constants/styles";
import { IPersonality } from "@/api/PersonalityApi";
import { PersonalityCard } from "@/components/molecules/Personalities/Card";
import { TileCardsWrapper } from "@/components/molecules/Cards/TileCardsWrapper";
import { PersonalityMobileCard } from "@/components/molecules/Personalities/MobileCard";

interface Props {
  personalities: IPersonality[];
}

export default ({ personalities }: Props) => {
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
          {personalities.map(personality => (
            <PersonalityMobileCard
              key={personality.id}
              personality={personality}
            />
          ))}
        </MobileWrapper>
      </device.ForMobile>
    </>
  );
};

const MobileWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
`;
