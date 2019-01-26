import * as React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";
import { ButtonLink } from "./../commons/ButtonLink";

export const FeaturedPersonalityListenToRadioButton = () => <ListenToButton to="" text="listen to radio" />;

const ListenToButton = styled(ButtonLink)`
  background-color: ${chkColors.blue};
  height: 35px;
  width: 60%;
`;
