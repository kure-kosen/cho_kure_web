import * as React from "react";
import styled from "styled-components";

import * as img from "./../../images/hero.jpg";

export const Contact = () => (
  <div>
    <HeroArea>
      <HeroContent>
        Contact
        <HeroContentBar />
        ご意見ご感想お待ちしております
      </HeroContent>
    </HeroArea>
  </div>
);

const HeroArea = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(-45deg, rgba(211, 237, 251, 0.2), rgba(243, 225, 100, 0.2)), url(${img});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  width: 60%;
  font-size: 2rem;
  text-align: center;
  color: white;
`;

const HeroContentBar = styled.hr`
  display: box;
  width: 50%;
  height: 2px;
  background-color: #f6ad3c;
  border: 0;
`;
