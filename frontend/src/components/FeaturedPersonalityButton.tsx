import * as React from "react";

import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

export const FeaturedPersonalityButton = () => <PersonalityButton>personality list</PersonalityButton>;

const PersonalityButton = ChkButtonBase.extend`
  background-color: ${chkColors.orange};
  width: 210px;
  height: 48px;
  /* width: 30%; */
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;
