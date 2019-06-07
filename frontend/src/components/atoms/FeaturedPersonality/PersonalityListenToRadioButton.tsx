import React from "react";
import styled from "styled-components";

import ChkButtonBase from "@/components/atoms/Buttons/ChkButtonBase";

export default () => (
  <Wrapper>
    <ChkButtonBase to="/" text="listen to radio" bgcolor="SKY_BLUE" />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  height: 35px;
  width: 60%;
`;
