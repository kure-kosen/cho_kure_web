import * as React from "react";
import styled from "styled-components";

import { media } from "./../commons/style";

import { HeroArea } from "./../components/HeroArea";
import { FeaturedPersonalitiesWrapper } from "./../components/FeaturedPersonalitiesWrapper";
import { AboutSidebar } from "./../components/AboutSidebar";
import { PopularRadioWrapper } from "./../components/PopularRadioWrapper";
import { WeeklyComic } from "./../components/WeeklyComic";
import { TweetStream } from "./../components/TweetStream";
import { RadioCardWrapper } from "./../components/RadioCardWrapper";
import { FeaturedBlogWrapper } from "./../components/FeaturedBlogWrapper";
import { AboutFooter } from "./../components/AboutFooter";

export const Index = () => (
  <div>
    <HeroArea InnerComponent="検索バー" />
    <FeaturedPersonalitiesWrapper />
    <Contrainer>
      <Sidebar>
        <AboutSidebar />
        <WeeklyComic />
        <PopularRadioWrapper />
        <TweetStream />
      </Sidebar>
      <MainContentWrapper>
        <RadioCardWrapper />
        <FeaturedBlogWrapper />
      </MainContentWrapper>
    </Contrainer>
    <AboutFooter />
  </div>
);

const Contrainer = styled.div`
  display: flex;
`;

const Sidebar = styled.nav`
  flex: 0 0 25%;

  @media ${media.mobile} {
    flex: 0 0 0%;
    display: none;
  }
`;

const MainContentWrapper = styled.div`
  flex: 0 0 75%;

  @media ${media.mobile} {
    flex: 0 0 100%;
  }
`;
