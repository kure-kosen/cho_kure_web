import * as React from "react";
import styled from "styled-components";

import ChkButtonBase from "../commons/ChkButtonBase";

export const FeaturedPersonalityListenToRadioButton = () => (
  <Wrapper>
    <ChkButtonBase to="/" text="listen to radio" color="blue" />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  height: 35px;
  width: 60%;
`;
