import React, { FC } from "react";
import styled from "styled-components";
import { color, device } from "@/constants/styles";

import { HeroArea } from "@/components/atoms/HeroArea";

const ContactHeroAreaBody: FC<{}> = () => {
  return (
    <HeroArea>
      <HeroContentWrapper>
        Contact
        <HeroContentBar />
        ご意見ご感想お待ちしております
      </HeroContentWrapper>
    </HeroArea>
  );
};

export const ContactHeroArea: FC<{}> = () => {
  return (
    <>
      <device.Default>
        <HeroAreaWrapepr>
          <ContactHeroAreaBody />
        </HeroAreaWrapepr>
      </device.Default>

      <device.ForMobile>
        <HeroAreaMobileWrapepr>
          <ContactHeroAreaBody />
        </HeroAreaMobileWrapepr>
      </device.ForMobile>
    </>
  );
};

const HeroAreaWrapepr = styled.div`
  height: 500px;
  width: 100%;
`;

const HeroAreaMobileWrapepr = styled.div`
  height: 250px;
  width: 100%;
`;

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
