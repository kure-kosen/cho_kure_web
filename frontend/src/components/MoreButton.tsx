import * as React from "react";
import styled from "styled-components";

import { Button } from "../commons/Button";

export const MoreButton = () => <ButtonTag text="more" />;

const ButtonTag = styled(Button)`
  width: 110px;
`;
