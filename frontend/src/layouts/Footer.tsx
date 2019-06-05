import React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";

export const Footer = () => <FooterStyle>&copy;2018 milme</FooterStyle>;

const FooterStyle = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${chkColors.blue};
`;
