import React from "react";
import styled from "styled-components";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

export const FeaturedPersonalityListenToRadioButton = () => <ListenToButton>listen to radio</ListenToButton>;

const ListenToButton = styled(ChkButtonBase)`
  background-color: ${chkColors.blue};
  height: 35px;
  width: 60%;
  margin: 0 auto;
  border-radius: 20px;
`;
