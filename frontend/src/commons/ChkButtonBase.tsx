import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { chkColors } from "./color";

interface IPropsChkButtonBase {
  to?: string;
  text: string | React.ReactNode;
  color?: string;
}

interface IBackgroundColor {
  color?: string;
}

const ChkButtonBase = (props: IPropsChkButtonBase) => {
  if (props.to) {
    if (props.to.startsWith("http")) {
      return <ATag href={props.to}>{props.text}</ATag>;
    } else {
      return (
        <LinkTag color={props.color} to={props.to}>
          {props.text}
        </LinkTag>
      );
    }
  } else {
    return <ButtonTag>{props.text}</ButtonTag>;
  }
};

const ButtonStyle = css`
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px;
  color: white;
  outline: none;
  border-style: none;
  box-shadow: 4px 3px 10px 0px ${chkColors.shadow};
  border-radius: 20px;
  text-align: center;
  background-color: ${(props: IBackgroundColor) => (props.color ? chkColors[props.color] : chkColors.orange)};
`;

const ButtonTag = styled.button`
  ${ButtonStyle}
`;

const LinkTag = styled(Link)`
  ${ButtonStyle}
`;

const ATag = styled.a`
  ${ButtonStyle}
`;

export default ChkButtonBase;
