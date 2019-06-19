import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";

import PersonalityIcon from "@/components/atoms/Features/PersonalityIcon";

export default ({ personalities }: Pick<IRadio, "personalities">) => (
  <Wrapper>
    {personalities.map(personality => (
      <PersonalityIcon image={personality.image} key={personality.id} />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;
