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
  const { to, text, name } = props;
  const { color, bgcolor, border } = props;

  if (to) {
    if (to.startsWith("http")) {
      return (
        <ATag color={color} bgcolor={bgcolor} border={border} href={to}>
          {text}
        </ATag>
      );
    } else {
      return (
        <LinkTag color={color} bgcolor={bgcolor} border={border} to={to}>
          {text}
        </LinkTag>
      );
    }
  } else {
    return (
      <ButtonTag name={name} color={color} bgcolor={bgcolor} border={border}>
        {text}
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
