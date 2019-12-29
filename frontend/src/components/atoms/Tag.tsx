import React, { FC } from "react";
import styled from "styled-components";
import { color } from "@/constants/styles";

interface Props {
  tag: string;
}

export const Tag: FC<Props> = ({ tag }) => {
  return (
    <StyledTag>
      <Span>{tag}</Span>
    </StyledTag>
  );
};

const StyledTag = styled.li`
  position: relative;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 1em;
  background-color: ${color.BLUE};
  clip-path: polygon(100% 0%, 100% 100%, 20px 100%, 0 50%, 20px 0%);
  border-radius: 0 3px 3px 0;
  color: #fff;
  font-size: 13px;
  text-decoration: none;
  transition: 0.2s;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 15px;
    display: block;
    width: 6px;
    height: 6px;
    margin-top: -3px;
    background-color: #fff;
    border-radius: 100%;
  }
`;

const Span = styled.span`
  display: block;
  padding-left: 15px;
  overflow: hidden;
`;
