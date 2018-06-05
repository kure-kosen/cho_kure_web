import * as React from "react";
import styled from "styled-components";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <Title>
    Hello from {props.compiler} and {props.framework}!
  </Title>
);

const Title = styled.h1`
  color: red;
`;
