import React, { Suspense, useState } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import { device, color } from "@/constants/styles";
import { CHK } from "@/constants/url";

import RootStore from "@/stores/RootStore";

import { RadioDetailHeroArea } from "@/components/molecules/HeroArea/RadioDetailHeroArea";
import TweetStream from "@/components/atoms/Features/TweetStream";
import PopularRadioWrapper from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import { RadioPlayer } from "@/components/molecules/RadioDetails/RadioPlayer";
import Personalities from "@/components/molecules/Personalities";
import { Share } from "@/components/molecules/RadioDetails/Share";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";
import RadioStore from "@/stores/RadioStore";
import { IRadio } from "@/api/RadioApi";

interface Props {
  radioStore: RadioStore;
  setRadio: React.Dispatch<IRadio | null>;
  radio: IRadio | null;
}

const Main: React.FC<Props> = ({ radioStore, setRadio, radio }) => {
  const location = useLocation();
  const SHARE_URL = CHK.FRONT_END.PROD + location.pathname;
  const { radioId } = useParams();

  if (radio) {
    return (
      <>
        <Top>
          <Left>
            <RadioPlayer {...radio} />
          </Left>
          <Right>
            <Title>{radio.title}</Title>
            <Description>
              <ReactMarkdown source={radio.description} />
            </Description>
            <Share url={SHARE_URL} text={radio.title} />
          </Right>
        </Top>
        <Bottom>
          <Title>出演しているパーソナリティー</Title>
          <Personalities personalities={radio.personalities} />
        </Bottom>
      </>
    );
  }

  throw (async () => {
    const cache = await radioStore.fetchRadio(Number(radioId));
    setRadio(cache);
  })();
};

export const RadioDetail = observer((props: { rootStore: RootStore }) => {
  const { rootStore } = props;
  const { radioStore } = rootStore;

  const [radio, setRadio] = useState<IRadio | null>(null);

  return (
    <div>
      <Suspense fallback={<CircleSpinner />}>
        <RadioDetailHeroArea>{radio ? radio.title : ""}</RadioDetailHeroArea>
      </Suspense>
      <Contrainer>
        <Sidebar>
          <PopularRadioWrapper />
          <TweetStream />
        </Sidebar>
        <MainContentWrapper>
          <Suspense fallback={<CircleSpinner />}>
            <Main radio={radio} setRadio={setRadio} radioStore={radioStore} />
          </Suspense>
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
  padding: 50px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
`;

const Left = styled.div`
  width: 50%;
  padding-right: 25px;
`;

const Right = styled.div`
  width: 50%;
  padding-left: 25px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: left;
  color: ${color.BLUE};
`;

const Description = styled.div``;

const Bottom = styled.div`
  width: 100%;
  margin-top: 50px;
`;
