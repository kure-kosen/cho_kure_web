import React, { Suspense, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import { device, color } from "@/constants/styles";
import { CHK } from "@/constants/url";

import RootStore from "@/stores/RootStore";
import RadioStore from "@/stores/RadioStore";

import { RadioDetailHeroArea } from "@/components/molecules/HeroArea/RadioDetailHeroArea";
import TweetStream from "@/components/atoms/Features/TweetStream";
import { PopularRadiosWrapper } from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import { RadioPlayer } from "@/components/molecules/RadioDetails/RadioPlayer";
import Personalities from "@/components/molecules/Personalities";
import { Share } from "@/components/molecules/RadioDetails/Share";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";

import { IRadio } from "@/api/RadioApi";
import { PersonalityProfileMiniCard } from "@/components/atoms/FeaturedPersonality/PersonalityProfileMiniCard";

interface Props {
  radioStore: RadioStore;
  setRadio: React.Dispatch<IRadio | undefined>;
  radio: IRadio | undefined;
}

const Main: React.FC<Props> = ({ radioStore, setRadio, radio }) => {
  const location = useLocation();
  const SHARE_URL = CHK.FRONT_END.PROD + location.pathname;
  const { radioId } = useParams();

  if (radio) {
    return (
      <>
        <device.Default>
          <PCWrapper>
            <Top>
              <Left>
                <RadioPlayer {...radio} />
              </Left>
              <Right>
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
          </PCWrapper>
        </device.Default>
        <device.ForMobile>
          <MobileWrapper>
            <Title>{radio ? radio.title : ""}</Title>
            <RadioPlayer {...radio} />
            <Description>
              <ReactMarkdown source={radio.description} />
            </Description>
            <Share url={SHARE_URL} text={radio.title} />
            <Title>出演しているパーソナリティー</Title>
            {radio.personalities.map(({ name, image, id }) => (
              <PersonalityProfileMiniCard name={name} image={image} key={id} />
            ))}
          </MobileWrapper>
        </device.ForMobile>
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

  const [radio, setRadio] = useState<IRadio | undefined>(undefined);

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
      <Suspense fallback={<RadioDetailHeroArea>{""}</RadioDetailHeroArea>}>
        <device.Default>
          <RadioDetailHeroArea>{radio ? radio.title : ""}</RadioDetailHeroArea>
        </device.Default>
      </Suspense>
      <Contrainer>
        <Sidebar>
          <PopularRadiosWrapper radios={popularRadios} />
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
`;

const PCWrapper = styled.div`
  padding: 50px;
`;

const MobileWrapper = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto;
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
  margin: 5px 0;
`;

const Description = styled.div``;

const Bottom = styled.div`
  width: 100%;
  margin-top: 50px;
`;
