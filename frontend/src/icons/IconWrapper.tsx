import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

interface IProps {
  children: string | React.HTMLAttributes<HTMLElement> | React.ReactNode;
}

export const IconWrapper = (props: IProps) => <Circle>{props.children}</Circle>;

const Circle = styled.div`
  float: left;
  font-size: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${color.ORANGE};
  color: rgba(255, 255, 255, 0.8);
`;
