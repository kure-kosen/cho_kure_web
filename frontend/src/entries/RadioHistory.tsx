import * as React from "react";
import styled from "styled-components";

import { media } from "./../commons/style";

import { HeroArea } from "./../components/HeroArea";
import { RadioSearcher } from "./../components/RadioSearcher";
import { AboutSidebar } from "./../components/AboutSidebar";
import { PopularRadioWrapper } from "./../components/PopularRadioWrapper";
import { TweetStream } from "./../components/TweetStream";
import { RadioHistoryContentWrapper } from "./../components/RadioHistoryContentWrapper";
import { FeaturedBlogWrapper } from "./../components/FeaturedBlogWrapper";

export const RadioHistory = () => (
  <div>
    <HeroArea InnerComponent="Radio History" />
    <Container>
      <Sidebar>
        <RadioSearcher />
        <AboutSidebar />
        <PopularRadioWrapper />
        <TweetStream />
      </Sidebar>
      <MainContentWrapper>
        <RadioHistoryContentWrapper />
        <FeaturedBlogWrapper />
      </MainContentWrapper>
    </Container>
  </div>
);

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.nav`
  flex: 0 0 20%;

  @media ${media.mobile} {
    flex: 0 0 0%;
    display: none;
  }
`;

const MainContentWrapper = styled.div`
  flex: 0 0 80%;

  @media ${media.mobile} {
    flex: 0 0 100%;
  }
`;
