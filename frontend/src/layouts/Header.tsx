import * as React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

import * as logo from "./../../images/radio-logo.jpg";

export const Header = () => (
  <HeaderStyle>
    <LogoArea>
      <Logo src={logo} />
    </LogoArea>
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
  height: 60px;
`;

const Title = styled.span`
  /* ${title}; */
  color: ${chkColors.blue};
  `;

const LogoArea = styled.img`
  margin: 10px;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const NavLi = styled.li`
  list-style: none;
  float: left;
  /* padding: 10px 50px; */

  a:hover {
    background-color: white;
    color: #f38d00;
  }
`;

const NavUl = styled.ul`
  float: right;
`;
