import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ChkButtonBase } from "./ChkButtonBase";

export interface IProps {
  to: string;
  text: string | React.ReactNode;
}

export const ButtonLink = (props: IProps) => <LinkTag to={props.to}>{props.text}</LinkTag>;

const LinkTag = styled(Link)`
  ${ChkButtonBase}
`;
