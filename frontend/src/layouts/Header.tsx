import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { title } from "./../commons/style";
import { chkColors } from "./../commons/color";

import logo from "./../../images/chkLogo.jpg";

export const Header = () => (
  <HeaderStyle>
    <LogoArea>
      <Logo src={logo} />
    </LogoArea>
    <Nav>
      <ToTopPage to="/">ちょっと聞いて呉高専</ToTopPage>
      <LinksWrapper>
        <LinkWrapper>
          <PageLink to="/radios">history</PageLink>
        </LinkWrapper>
        <LinkWrapper>
          <PageLink to="/blog">blog</PageLink>
        </LinkWrapper>
        <LinkWrapper>
          <PageLink to="/personality">personality</PageLink>
        </LinkWrapper>
        <LinkWrapper>
          <PageLink to="/contact">contact</PageLink>
        </LinkWrapper>
      </LinksWrapper>
    </Nav>
  </HeaderStyle>
);

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
`;

const LogoArea = styled.div`
  height: 100%;
  width: 60px;
  float: left;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  padding: 10px;
`;

const Nav = styled.div`
  width: 100%;
  height: 60px;
`;

const ToTopPage = styled(Link)`
  ${title};
  color: ${chkColors.blue};
  vertical-align: middle;
  line-height: 60px;
  margin-left: 15px;
`;

const LinksWrapper = styled.ul`
  float: right;
`;

const LinkWrapper = styled.li`
  list-style: none;
  float: left;
  font-size: 18px;
  line-height: 18px;
  vertical-align: middle;
  margin: 0 50px;
`;

const PageLink = styled(Link)`
  &:visited {
    color: ${chkColors.blue};
  }

  &:hover {
    color: #f38d00;
  }
`;
