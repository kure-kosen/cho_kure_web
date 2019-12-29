import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import { device } from "@/constants/styles";

import RootStore from "@/stores/RootStore";

import { ResponsibleHeroArea } from "@/components/atoms/HeroArea";
import AboutBottom from "@/components/atoms/AboutBottom";
import AboutSidebar from "@/components/atoms/Features/AboutSidebar";
import WeeklyComic from "@/components/atoms/WeeklyComic";
import TweetStream from "@/components/atoms/Features/TweetStream";
import MoreButton from "@/components/atoms/Buttons/MoreButton";

import { PersonalitiesSlider } from "@/components/molecules/Personalities/PersonalitiesSlider";
import { PopularRadiosWrapper } from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import RadioCardWrapper from "@/components/molecules/RadioCard/RadioCardWrapper";
import BlogWrapper from "@/components/molecules/Blogs/BlogWrapper";
import { IRadio } from "@/api/RadioApi";

interface IProps {
  rootStore?: RootStore;
}

export default observer((props: IProps) => {
  const { rootStore } = props;
  const { radioStore, personalityStore } = rootStore!;

  useEffect(() => {
    radioStore.fetchRadios();
    personalityStore.fetchRegularPersonality();
  }, []);

  const [popularRadios, setPopularRadios] = useState<IRadio[] | undefined>(
    undefined
  );

  useEffect(() => {
    const radios = radioStore.shuffledRadios({ limit: 3 });
    setPopularRadios(radios);
  }, [radioStore.radios]);

  return (
    <div>
      <ResponsibleHeroArea>検索バー</ResponsibleHeroArea>
      <device.Default>
        <PersonalitiesSlider
          personalities={personalityStore.shuffledRegularPersonality}
        />
      </device.Default>
      <Contrainer>
        <Sidebar>
          <AboutSidebar />
          <WeeklyComic />
          <PopularRadiosWrapper radios={popularRadios} />
          <TweetStream />
        </Sidebar>
        <MainContentWrapper>
          <RadioCardWrapper
            radios={radioStore.latestRadios({ offset: 0, limit: 9 })}
          />
          <MoreButton to="/radios" />
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
