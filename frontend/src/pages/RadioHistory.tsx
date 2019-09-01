import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import { device } from "@/constants/styles";

import HeroArea from "@/components/atoms/HeroArea";
import AboutSidebar from "@/components/atoms/Features/AboutSidebar";
import TweetStream from "@/components/atoms/Features/TweetStream";

import PopularRadioWrapper from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import { RadioHistoryWrapper } from "@/components/molecules/RadioHistory/RadioHistoryWrapper";
import RadioSearcher from "@/components/molecules/RadioSearcher";
import BlogWrapper from "@/components/molecules/Blogs/BlogWrapper";

import RootStore from "@/stores/RootStore";

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
      <HeroArea>Radio History</HeroArea>
      <Container>
        <Sidebar>
          <RadioSearcher />
          <AboutSidebar />
          <PopularRadioWrapper />
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
