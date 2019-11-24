import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import { device } from "@/constants/styles";

import { ResponsibleHeroArea } from "@/components/atoms/HeroArea";
import AboutSidebar from "@/components/atoms/Features/AboutSidebar";
import TweetStream from "@/components/atoms/Features/TweetStream";

import { PopularRadiosWrapper } from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import { RadioHistoryWrapper } from "@/components/molecules/RadioHistory/RadioHistoryWrapper";
import RadioSearcher from "@/components/molecules/RadioSearcher";
import BlogWrapper from "@/components/molecules/Blogs/BlogWrapper";

import RootStore from "@/stores/RootStore";
import { IRadio } from "@/api/RadioApi";

interface IProps {
  rootStore?: RootStore;
}

export default observer((props: IProps) => {
  const { rootStore } = props;
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

  return (
    <div>
      <ResponsibleHeroArea>Radio History</ResponsibleHeroArea>
      <Container>
        <Sidebar>
          <RadioSearcher />
          <AboutSidebar />
          <PopularRadiosWrapper radios={popularRadios} />
          <TweetStream />
        </Sidebar>
        <MainContentWrapper>
          <RadioHistoryWrapper radios={radioStore.radios} />
          <BlogWrapper />
        </MainContentWrapper>
      </Container>
    </div>
  );
});

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.nav`
  flex: 0 0 20%;

  @media ${device.mobile} {
    flex: 0 0 0%;
    display: none;
  }
`;

const MainContentWrapper = styled.div`
  flex: 0 0 80%;

  @media ${device.mobile} {
    flex: 0 0 100%;
  }
`;
