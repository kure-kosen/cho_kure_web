import React from "react";
import styled from "styled-components";

import { device } from "@/constants/styles";

import HeroArea from "@/components/atoms/HeroArea";
import RadioSearcher from "@/components/atoms/RadioSearcher";
import AboutSidebar from "@/components/atoms/AboutSidebar";
import TweetStream from "@/components/atoms/TweetStream";

import PopularRadioWrapper from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import RadioHistoryWrapper from "@/components/molecules/RadioHistory/RadioHistoryWrapper";
import BlogWrapper from "@/components/molecules/Blogs/BlogWrapper";

export default () => (
  <div>
    <HeroArea>Radio History</HeroArea>
    <Container>
      <Sidebar>
        <RadioSearcher />
        <AboutSidebar />
        <PopularRadioWrapper />
        <TweetStream />
      </Sidebar>
      <MainContentWrapper>
        <RadioHistoryWrapper />
        <BlogWrapper />
      </MainContentWrapper>
    </Container>
  </div>
);

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.nav`
  flex: 0 0 20%;

  @media ${device.mobile} {
    flex: 0 0 0%;
    display: none;
  }
`;

const MainContentWrapper = styled.div`
  flex: 0 0 80%;

  @media ${device.mobile} {
    flex: 0 0 100%;
  }
`;
