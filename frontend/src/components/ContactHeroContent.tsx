import React from "react";
import styled from "styled-components";

import { media } from "./../commons/style";
import { color } from "@/constants/styles";

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
  color: ${color.WHITE};

  @media ${media.mobile} {
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
