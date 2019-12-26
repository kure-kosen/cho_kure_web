import React, { useEffect, useState, useContext, FC } from "react";
import { observer } from "mobx-react-lite";

import { SidebarPage } from "@/layouts";

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
import RootContext from "@/utils/Contexts/RootContext";

export const TopPage: FC = observer(() => {
  const rootStore = useContext(RootContext);
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
      <PersonalitiesSlider
        personalities={personalityStore.shuffledRegularPersonality}
      />
      <SidebarPage.Container>
        <SidebarPage.SidebarContent>
          <AboutSidebar />
          <WeeklyComic />
          <PopularRadiosWrapper radios={popularRadios} />
          <TweetStream />
        </SidebarPage.SidebarContent>
        <SidebarPage.MainContent>
          <RadioCardWrapper
            radios={radioStore.latestRadios({ offset: 0, limit: 9 })}
          />
          <MoreButton to="/radios" />
          <BlogWrapper />
        </SidebarPage.MainContent>
      </SidebarPage.Container>
      <AboutBottom />
    </div>
  );
});
