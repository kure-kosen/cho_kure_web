import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";

import PersonalityIcon from "@/components/atoms/Features/PersonalityIcon";

export default ({ personalities }: Pick<IRadio, "personalities">) => (
  <Wrapper>
    {personalities.map(personality => (
      <Link to={`/personality/${personality.id}`}>
        <PersonalityIcon image={personality.image} key={personality.id} />
      </Link>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;
