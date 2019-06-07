import React from "react";
import styled from "styled-components";

import ChkButtonBase from "@/components/atoms/Buttons/ChkButtonBase";

interface IProps {
  name: string;
  text: string;
}

export default ({ name, text }: IProps) => (
  <RadioSearchTagButton
    name={name}
    text={text}
    textcolor="BLUE"
    bgcolor="WHITE"
    border="BLUE"
  />
);

const RadioSearchTagButton = styled(ChkButtonBase)``;
