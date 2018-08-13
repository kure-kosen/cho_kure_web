import * as React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

import * as logo from "./../../images/radio-logo.jpg";

export const Header = () => (
  <HeaderStyle>
    <PictureArea src={logo}/>
    <Link to="/">
      <Title>ちょっと聞いて呉高専</Title>
    </Link>
    <nav>
      <NavUl>
        <NavLi>
          <Link to="/radios">history</Link>
        </NavLi>
        <NavLi>
          <Link to="/blog">blog</Link>
        </NavLi>
        <NavLi>
          <Link to="/personality">personality</Link>
        </NavLi>
        <NavLi>
          <Link to="/contact">contact</Link>
        </NavLi>
      </NavUl>
    </nav>
  </HeaderStyle>
);

const HeaderStyle = styled.header`
  width: 100%;
  color: black;
  height: 80px;
`;

const Title = styled.span`
  ${title};
  color: ${chkColors.blue};
`;

const PictureArea = styled.img`
  width: auto;
  height: 60px;
`;

const NavLi = styled.li `
  list-style: none;
  float: left;
  padding: 10px 50px;

  a:hover {
    background-color: white;
    color: #f38d00;
  }
`;

const NavUl = styled.ul`
  float: right;
`;