import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import { device } from "@/constants/styles";

import RootStore from "@/stores/RootStore";

import AboutSidebar from "@/components/atoms/Features/AboutSidebar";
import WeeklyComic from "@/components/atoms/WeeklyComic";
import TweetStream from "@/components/atoms/Features/TweetStream";
import Personalities from "@/components/molecules/Personalities";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";
import { PersonalityHeroArea } from "@/components/molecules/HeroArea/PersonalityHeroArea";
import PopularRadioWrapper from "@/components/molecules/PopularRadio/PopularRadioWrapper";

export default observer((props: { rootStore: RootStore }) => {
  const { rootStore } = props;
  const { personalityStore } = rootStore;
  const { personalities } = personalityStore;

  React.useEffect(() => {
    personalityStore.fetchPersonalities();
  }, []);

  return (
    <div>
      <PersonalityHeroArea />
      <Contrainer>
        <Sidebar>
          <AboutSidebar />
          <WeeklyComic />
          <PopularRadioWrapper />
          <TweetStream />
        </Sidebar>
        <MainContentWrapper>
          {personalities ? (
            <Personalities personalities={personalities} />
          ) : (
            <CircleSpinner />
          )}
        </MainContentWrapper>
      </Contrainer>
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
