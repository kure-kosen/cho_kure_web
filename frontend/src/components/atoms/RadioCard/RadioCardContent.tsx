import React from "react";
import styled from "styled-components";

import { IRadio } from "@/api/RadioApi";
import { color } from "@/constants/styles";

export default (props: Pick<IRadio, "title" | "description">) => {
  const { title, description } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: ${color.BLUE};
  text-align: center;
`;
const Description = styled.p``;
