import * as React from "react";
import styled from "styled-components";

import * as img from "./../../images/1d4633a2034e71e3992efe6776fcce91-1.png";

export const Header = () => <HeaderStyle>header</HeaderStyle>;

const HeaderStyle = styled.header`
  width: 100%;
  color: black;
  background-image: url(${img});
  height: 80px;
`;
