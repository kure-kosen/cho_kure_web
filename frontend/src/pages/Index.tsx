import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import { device } from "@/constants/styles";

import RootStore from "@/stores/RootStore";

import HeroArea from "@/components/atoms/HeroArea";
import AboutBottom from "@/components/atoms/AboutBottom";
import AboutSidebar from "@/components/atoms/Features/AboutSidebar";
import WeeklyComic from "@/components/atoms/WeeklyComic";
import TweetStream from "@/components/atoms/Features/TweetStream";

import PersonalitiesWrapper from "@/components/molecules/Personalities/PersonalitiesWrapper";
import PopularRadioWrapper from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import RadioCardWrapper from "@/components/molecules/RadioCard/RadioCardWrapper";
import BlogWrapper from "@/components/molecules/Blogs/BlogWrapper";

interface IProps {
  rootStore?: RootStore;
}

export default observer((props: IProps) => {
  const { rootStore } = props;
  const { radioStore } = rootStore!;

  React.useEffect(() => {
    radioStore.fetchRadios();
  }, []);

  return (
    <div>
      <HeroArea>検索バー</HeroArea>
      <PersonalitiesWrapper />
      <Contrainer>
        <Sidebar>
          <AboutSidebar />
          <WeeklyComic />
          <PopularRadioWrapper />
          <TweetStream />
        </Sidebar>
        <MainContentWrapper>
          <RadioCardWrapper radios={radioStore.radios} />
          <BlogWrapper />
        </MainContentWrapper>
      </Contrainer>
      <AboutBottom />
    </div>
  );
});

const Contrainer = styled.div`
  display: flex;
`;

const Sidebar = styled.nav`
  flex: 0 0 25%;
  padding: 0 20px;

  @media ${device.mobile} {
    flex: 0 0 0%;
    display: none;
  }
`;

const MainContentWrapper = styled.div`
  flex: 0 0 75%;

  @media ${device.mobile} {
    flex: 0 0 100%;
  }
`;
