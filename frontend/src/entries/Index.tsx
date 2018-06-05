import * as React from "react";
import styled from "styled-components";

export const Index = () => (
  <div>
    <Header>header</Header>
    <HeroArea>hero-area</HeroArea>
    <FeaturedPersonalitiesWrapper>featured-personalities-wrapper</FeaturedPersonalitiesWrapper>
    <div className="row">
      <div className="column column-20">
        <AboutSidebar>about-sidebar</AboutSidebar>
        <WeeklyComic>weekly-comic</WeeklyComic>
        <PopularRadioWrapper>popular-radio-wrapper</PopularRadioWrapper>
        <TweetStream>tweet-stream</TweetStream>
      </div>
      <div className="column column-80">
        <RadioCardWrapper>radio-card-wrapper</RadioCardWrapper>
        <FeaturedBlogWrapper>featured-blog-wrapper</FeaturedBlogWrapper>
      </div>
    </div>
    <AboutFooter>about-footer</AboutFooter>
    <Footer>footer</Footer>
  </div>
);

const Header = styled.header`
  width: 100%;
  color: white;
  background-color: #ffd464;
  height: 80px;
`;

const HeroArea = styled.div`
  width: 100%;
  color: white;
  background-color: #f26964;
  height: 500px;
`;

const FeaturedPersonalitiesWrapper = styled.div`
  width: 100%;
  color: white;
  background-color: #1253a4;
  height: 400px;
`;

const AboutSidebar = styled.div`
  width: 100%;
  color: gray;
  background-color: #f4f4f2;
  height: 400px;
`;

const WeeklyComic = styled.div`
  width: 100%;
  color: white;
  background-color: #333333;
  height: 600px;
`;

const PopularRadioWrapper = styled.div`
  width: 100%;
  color: black;
  background-color: #f1f0ee;
  height: 400px;
`;

const TweetStream = styled.div`
  width: 100%;
  color: white;
  background-color: #fff200;
  height: 400px;
`;

const RadioCardWrapper = styled.div`
  width: 100%;
  color: white;
  background-color: #2fcdb4;
  height: 1000px;
`;

const FeaturedBlogWrapper = styled.div`
  width: 100%;
  color: white;
  background-color: #242424;
  height: 600px;
`;

const AboutFooter = styled.div`
  width: 100%;
  color: white;
  background-color: #40aaef;
  height: 400px;
`;

const Footer = styled.footer`
  width: 100%;
  color: white;
  background-color: #fba848;
  height: 100px;
`;
