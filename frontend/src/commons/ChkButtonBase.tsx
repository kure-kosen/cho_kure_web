import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { color } from "@/constants/styles";

interface IPropsCss {
  textcolor?: string;
  bgcolor?: string;
  border?: string;
}

interface IPropsChkButtonBase extends IPropsCss {
  to?: string;
  text: string | React.ReactNode;
  name?: string;
  onClick?: (e: any) => any;
}

const ChkButtonBase = (props: IPropsChkButtonBase) => {
  const {
    to,
    text,
    name,
    textcolor,
    bgcolor,
    border,
    onClick,
    ...otherProps
  } = props;

  if (to) {
    if (to.startsWith("http")) {
      return (
        <ATag
          textcolor={textcolor}
          bgcolor={bgcolor}
          border={border}
          href={to}
          {...otherProps}
        >
          {text}
        </ATag>
      );
    } else {
      return (
        <LinkTag
          textcolor={textcolor}
          bgcolor={bgcolor}
          border={border}
          to={to}
          {...otherProps}
        >
          {text}
        </LinkTag>
      );
    }
  } else {
    return (
      <ButtonTag
        name={name}
        textcolor={textcolor}
        bgcolor={bgcolor}
        border={border}
        onClick={onClick}
        {...otherProps}
      >
        {text}
      </ButtonTag>
    );
  }
};

const ButtonStyle = css<IPropsCss>`
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px;
  outline: none;
  box-shadow: 4px 3px 10px 0px ${color.SHADOW};
  border-radius: 20px;
  text-align: center;
  color: ${props => (props.textcolor ? color[props.textcolor] : color.WHITE)};
  border: ${props =>
    props.border ? `2px solid ${color[props.border]}` : "none"};
  background-color: ${props =>
    props.bgcolor ? color[props.bgcolor] : color.ORANGE};
`;

const ButtonTag = styled.button<IPropsCss>`
  ${ButtonStyle}
`;

const LinkTag = styled(Link)<IPropsCss>`
  ${ButtonStyle}
`;

const ATag = styled.a<IPropsCss>`
  ${ButtonStyle}
`;

export default ChkButtonBase;
