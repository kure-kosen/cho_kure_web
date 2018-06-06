import * as React from "react";
import styled from "styled-components";

import { Header } from "./../layouts/Header";
import { Footer } from "./../layouts/Footer";

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
    <Header />
    <HeroArea />
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
    <Footer />
  </div>
);

const Contrainer = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  flex: 0 0 20%;
`;

const MainContentWrapper = styled.div`
  flex: 0 0 80%;
`;
