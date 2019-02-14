import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { chkColors } from "./color";

interface IPropsCss {
  color?: string;
  bgcolor?: string;
  border?: string;
}

interface IPropsChkButtonBase extends IPropsCss {
  to?: string;
  text: string | React.ReactNode;
  name?: string;
}

const ChkButtonBase = (props: IPropsChkButtonBase) => {
  if (props.to) {
    if (props.to.startsWith("http")) {
      return (
        <ATag color={props.color} bgcolor={props.bgcolor} border={props.border} href={props.to}>
          {props.text}
        </ATag>
      );
    } else {
      return (
        <LinkTag color={props.color} bgcolor={props.bgcolor} border={props.border} to={props.to}>
          {props.text}
        </LinkTag>
      );
    }
  } else {
    return (
      <ButtonTag name={props.name} color={props.color} bgcolor={props.bgcolor} border={props.border}>
        {props.text}
      </ButtonTag>
    );
  }
};

const ButtonStyle = css`
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px;
  outline: none;
  box-shadow: 4px 3px 10px 0px ${chkColors.shadow};
  border-radius: 20px;
  text-align: center;
  color: ${(props: IPropsCss) => (props.color ? chkColors[props.color] : chkColors.white)};
  border: ${(props: IPropsCss) => (props.border ? `2px solid ${chkColors[props.border]}` : "none")};
  background-color: ${(props: IPropsCss) => (props.bgcolor ? chkColors[props.bgcolor] : chkColors.orange)};
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
