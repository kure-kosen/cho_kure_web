import * as React from "react";
import styled from "styled-components";

import { ButtonLink } from "../commons/ButtonLink";

export const FeaturedPersonalityButton = () => <PersonalityButton to="/personality" text="personality list" />;

const PersonalityButton = styled(ButtonLink)`
  width: 210px;
  height: 48px;
  margin-top: 40px;
  border-radius: 20px;
`;
