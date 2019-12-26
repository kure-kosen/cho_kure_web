import React, { FC } from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

export const Footer: FC = () => <FooterStyle>&copy;2019- milme</FooterStyle>;

const FooterStyle = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.WHITE};
  background-color: ${color.BLUE};
`;
