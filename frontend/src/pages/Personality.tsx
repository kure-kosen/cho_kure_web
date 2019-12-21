import React, { useState, useEffect, useContext, FC } from "react";
import { observer } from "mobx-react-lite";

import { SidebarPage } from "@/layouts";
import AboutSidebar from "@/components/atoms/Features/AboutSidebar";
import WeeklyComic from "@/components/atoms/WeeklyComic";
import TweetStream from "@/components/atoms/Features/TweetStream";
import Personalities from "@/components/molecules/Personalities";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";

import { PersonalityHeroArea } from "@/components/molecules/HeroArea/PersonalityHeroArea";
import { PopularRadiosWrapper } from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import { IRadio } from "@/api/RadioApi";
import RootContext from "@/utils/Contexts/RootContext";

export const PersonalityPage: FC = observer(() => {
  const rootStore = useContext(RootContext);

  const { personalityStore, radioStore } = rootStore;
  const { personalities } = personalityStore;

  useEffect(() => {
    personalityStore.fetchPersonalities();
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
      <PersonalityHeroArea />

      <SidebarPage.Container>
        <SidebarPage.SidebarContent>
          <AboutSidebar />
          <WeeklyComic />
          <PopularRadiosWrapper radios={popularRadios} />
          <TweetStream />
        </SidebarPage.SidebarContent>

        <SidebarPage.MainContent>
          {personalities ? (
            <Personalities personalities={personalities} />
          ) : (
            <CircleSpinner />
          )}
        </SidebarPage.MainContent>
      </SidebarPage.Container>
    </div>
  );
});
