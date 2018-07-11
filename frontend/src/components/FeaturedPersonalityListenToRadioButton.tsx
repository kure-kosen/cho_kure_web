import * as React from "react";

import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

export const FeaturedPersonalityListenToRadioButton = () => <ListenToButton>listen to radio</ListenToButton>;

const ListenToButton = ChkButtonBase.extend`
  background-color: ${chkColors.blue};
  height: 35px;
  width: 60%;
  margin: 0 auto;
  border-radius: 20px;
`;
