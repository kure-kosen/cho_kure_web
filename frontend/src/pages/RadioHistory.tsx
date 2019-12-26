import React, { useState, useCallback, useEffect, useContext, FC } from "react";
import { observer } from "mobx-react-lite";

import { SidebarPage } from "@/layouts";

import { ResponsibleHeroArea } from "@/components/atoms/HeroArea";
import AboutSidebar from "@/components/atoms/Features/AboutSidebar";
import TweetStream from "@/components/atoms/Features/TweetStream";

import { PopularRadiosWrapper } from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import { RadioHistoryWrapper } from "@/components/molecules/RadioHistory/RadioHistoryWrapper";
import RadioSearcher from "@/components/molecules/RadioSearcher";
import BlogWrapper from "@/components/molecules/Blogs/BlogWrapper";
import { MoreButtonText } from "@/components/atoms/Buttons/MoreButtonText";

import { IRadio } from "@/api/RadioApi";
import RootContext from "@/utils/Contexts/RootContext";

export const RadioHistoryPage: FC = observer(() => {
  const rootStore = useContext(RootContext);
  const { radioStore } = rootStore!;

  useEffect(() => {
    radioStore.fetchRadios();
  }, []);

  const [popularRadios, setPopularRadios] = useState<IRadio[] | undefined>(
    undefined
  );

  useEffect(() => {
    const radios = radioStore.shuffledRadios({ limit: 3 });
    setPopularRadios(radios);
  }, [radioStore.radios]);

  const [limit, setLimit] = useState(10);

  const nextLoadingRadios = useCallback(() => {
    if (!isStillHaveRadios) return;
    setLimit(limit + 10);
  }, [limit]);

  const [isStillHaveRadios, setIsStillHaveRadios] = useState(true);

  useEffect(() => {
    if (!radioStore.radios) return;
    if (limit >= radioStore.radios.length) {
      setIsStillHaveRadios(false);
    }
  }, [limit, radioStore.radios]);

  return (
    <div>
      <ResponsibleHeroArea>Radio History</ResponsibleHeroArea>

      <SidebarPage.Container>
        <SidebarPage.SidebarContent>
          <RadioSearcher />
          <AboutSidebar />
          <PopularRadiosWrapper radios={popularRadios} />
          <TweetStream />
        </SidebarPage.SidebarContent>
        <SidebarPage.MainContent>
          <RadioHistoryWrapper
            radios={radioStore.latestRadios({ offset: 0, limit })}
          />
          {isStillHaveRadios && <MoreButtonText onClick={nextLoadingRadios} />}
          <BlogWrapper />
        </SidebarPage.MainContent>
      </SidebarPage.Container>
    </div>
  );
});

export { RadioHistoryPage as default };
