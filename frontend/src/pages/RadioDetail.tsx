import React, { Suspense, useState, useEffect, useContext, FC } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import { device, color } from "@/constants/styles";
import { CHK } from "@/constants/url";

import { RadioDetailHeroArea } from "@/components/molecules/HeroArea/RadioDetailHeroArea";
import TweetStream from "@/components/atoms/Features/TweetStream";
import { PopularRadiosWrapper } from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import { RadioPlayer } from "@/components/molecules/RadioDetails/RadioPlayer";
import Personalities from "@/components/molecules/Personalities";
import { Share } from "@/components/molecules/RadioDetails/Share";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";

import { IRadio } from "@/api/RadioApi";
import { PersonalityProfileMiniCard } from "@/components/atoms/FeaturedPersonality/PersonalityProfileMiniCard";
import RootContext from "@/utils/Contexts/RootContext";
import { SidebarPage } from "@/layouts";

interface Props {
  setRadio: React.Dispatch<IRadio | undefined>;
  radio: IRadio | undefined;
}

const Main: React.FC<Props> = ({ setRadio, radio }) => {
  const rootStore = useContext(RootContext);
  const { radioStore } = rootStore;
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

export const RadioDetailPage: FC = observer(() => {
  const rootStore = useContext(RootContext);
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

      <SidebarPage.Container>
        <SidebarPage.SidebarContent>
          <PopularRadiosWrapper radios={popularRadios} />
          <TweetStream />
        </SidebarPage.SidebarContent>

        <SidebarPage.MainContent>
          <Suspense fallback={<CircleSpinner />}>
            <Main radio={radio} setRadio={setRadio} />
          </Suspense>
        </SidebarPage.MainContent>
      </SidebarPage.Container>
    </div>
  );
});

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
