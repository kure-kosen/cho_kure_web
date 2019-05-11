import React from "react";
import styled from "styled-components";

import { media } from "./../commons/style";
import { chkColors } from "./../commons/color";

export const ContactHeroContent = () => (
  <Wrapper>
    Contact
    <HeroContentBar />
    ご意見ご感想お待ちしております
  </Wrapper>
);

const Wrapper = styled.div`
  width: 60%;
  font-size: 2rem;
  text-align: center;
  color: white;

  @media ${media.mobile} {
    width: 90%;
  }
`;

const HeroContentBar = styled.hr`
  display: box;
  width: 50%;
  height: 2px;
  background-color: ${chkColors.orange};
  border: 0;
`;
