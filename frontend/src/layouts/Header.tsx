import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, device } from "@/constants/styles";
import { BarsIcon } from "@/icons";

import logo from "./../../images/chkLogo.jpg";

const Links = () => (
  <>
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
  </>
);

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = useCallback(() => setIsOpen(true), [isOpen]);
  const closeMenu = useCallback(() => setIsOpen(false), [isOpen]);
  return (
    <>
      <MobileNav onClick={openMenu}>
        <StyledMenu>
          <BarsIcon />
        </StyledMenu>
      </MobileNav>
      {isOpen && <FullScreenMenu closeMenu={closeMenu} />}
    </>
  );
};

const FullScreenMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <FullScreen onClick={closeMenu}>
      <div>
        <Links />
      </div>
    </FullScreen>
  );
};

export const Header = () => (
  <HeaderStyle>
    <LogoArea to="/">
      <Logo src={logo} />
      <BrandText>ちょっと聞いて呉高専</BrandText>
    </LogoArea>
    <device.Default>
      <PCNav>
        <Links />
      </PCNav>
    </device.Default>
    <device.ForMobile>
      <Mobile />
    </device.ForMobile>
  </HeaderStyle>
);

const height = `60px`;

const HeaderStyle = styled.header`
  width: 100%;
  height: ${height};
  line-height: ${height};
  vertical-align: middle;
  display: flex;
`;

const LogoArea = styled(Link)`
  display: flex;
  width: auto;
  margin-right: auto;
`;

const Logo = styled.img`
  height: ${height};
  width: ${height};
  padding: 10px;
`;

const BrandText = styled.div`
  color: ${color.SKY_BLUE};
  font-size: 1.5rem;
  text-align: left;
  vertical-align: middle;
  margin-left: 15px;
`;

const PCNav = styled.nav`
  width: 50vw;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const LinkWrapper = styled.div``;

const PageLink = styled(Link)`
  &:visited {
    color: ${color.BLUE};
  }

  &:hover {
    color: #f38d00;
  }
`;

const MobileNav = styled.nav`
  width: ${height};
`;

const StyledMenu = styled.div`
  height: ${height};
  width: ${height};
  line-height: ${height};
  font-size: 30px;
`;

const FullScreen = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  position: fixed;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 24px;
`;
