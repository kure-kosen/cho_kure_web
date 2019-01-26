import * as React from "react";
import styled from "styled-components";

import { ChkButtonBase } from "./ChkButtonBase";

export interface IProps {
  text: string | React.ReactNode;
}

export const Button = (props: IProps) => <ButtonTag>{props.text}</ButtonTag>;

const ButtonTag = styled.button`
  ${ChkButtonBase}
`;
