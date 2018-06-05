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
    <div className="row">
      <div className="column column-20">
        <AboutSidebar />
        <WeeklyComic />
        <PopularRadioWrapper />
        <TweetStream />
      </div>
      <div className="column column-80">
        <RadioCardWrapper />
        <FeaturedBlogWrapper />
      </div>
    </div>
    <AboutFooter />
    <Footer />
  </div>
);
