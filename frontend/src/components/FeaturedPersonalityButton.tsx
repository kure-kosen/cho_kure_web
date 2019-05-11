import React from "react";
import styled from "styled-components";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

export const FeaturedPersonalityButton = () => <PersonalityButton>personality list</PersonalityButton>;

const PersonalityButton = styled(ChkButtonBase)`
  background-color: ${chkColors.orange};
  width: 210px;
  height: 48px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;
