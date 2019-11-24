import React, { FC } from "react";
import styled from "styled-components";
import { color, device } from "@/constants/styles";

import { ResponsibleHeroArea } from "@/components/atoms/HeroArea";

const ContactHeroAreaBody: FC<{}> = () => {
  return (
    <HeroContentWrapper>
      Contact
      <HeroContentBar />
      ご意見ご感想お待ちしております
    </HeroContentWrapper>
  );
};

export const ContactHeroArea: FC<{}> = () => {
  return (
    <ResponsibleHeroArea>
      <ContactHeroAreaBody />
    </ResponsibleHeroArea>
  );
};

const HeroContentWrapper = styled.div`
  width: 60%;
  font-size: 2rem;
  text-align: center;
  color: ${color.WHITE};

  @media ${device.mobile} {
    width: 90%;
  }
`;

const HeroContentBar = styled.hr`
  display: box;
  width: 50%;
  height: 2px;
  background-color: ${color.ORANGE};
  border: 0;
`;
