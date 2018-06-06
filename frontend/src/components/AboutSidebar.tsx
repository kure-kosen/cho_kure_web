import * as React from "react";
import styled from "styled-components";
import { media } from "./../commons/StyleUtils";

export const AboutSidebar = () => <AboutSidebarStyle>about-sidebar</AboutSidebarStyle>;

const AboutSidebarStyle = styled.div`
  width: 100%;
  color: gray;
  background-color: #f4f4f2;
  height: 400px;

  @media ${media.mobile} {
    display: none;
  }
`;
