import * as React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

import * as img from "./../../images/1d4633a2034e71e3992efe6776fcce91-1.png";
import * as logo from "./../../images/radio-logo.jpg";

export const Header = () => (
  <HeaderStyle>
    header
    <Logo>Logo</Logo>
    <Link to="/"><Title>ちょっと聞いて呉高専</Title></Link>
    <nav>
      <ul>
        <li>
          <Link to="/radios">history</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/personality">personality</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>

      </ul>
    </nav>
  </HeaderStyle>
);

const Logo = styled.header`
`;

const Title = styled.div`
  ${title};
  color: ${chkColors.blue};
  padding: 0 20px;
`;

const HeaderStyle = styled.header`
  width: 100%;
  color: black;
  background-image: url(${img});
  height: 80px;
`;

const PictureArea = styled.img`
  width: 100%;
  height: auto;
`;