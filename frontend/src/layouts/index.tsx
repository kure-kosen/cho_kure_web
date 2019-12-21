import styled from "styled-components";
import { device } from "@/constants/styles";

import { Footer } from "./Footer";
import { Main } from "./Main";
import { Header } from "./Header";

const SinglePageContainer = styled.div`
  width: 100%;
`;

const SidebarPageContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 0 0 75%;
  @media ${device.mobile} {
    flex: 0 0 100%;
  }
`;

const SidebarContent = styled.div`
  flex: 0 0 25%;
  padding: 0 20px;
  @media ${device.mobile} {
    flex: 0 0 0%;
    display: none;
  }
`;

const SinglePage = SinglePageContainer;
const SidebarPage = {
  Container: SidebarPageContainer,
  MainContent,
  SidebarContent
};

export { Header, Footer, Main, SinglePage, SidebarPage };
