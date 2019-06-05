import React from "react";
import styled from "styled-components";

import ChkButtonBase from "@/components/atoms/Buttons/ChkButtonBase";

export default () => (
  <Wrapper>
    <ChkButtonBase to="/personality" text="personality list" />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  width: 210px;
`;
