import React, { Suspense, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { device } from "@/constants/styles";
import RootStore from "@/stores/RootStore";
import RadioStore from "@/stores/RadioStore";
import { RadioDetailHeroArea } from "@/components/molecules/HeroArea/RadioDetailHeroArea";
import TweetStream from "@/components/atoms/Features/TweetStream";
import { PopularRadiosWrapper } from "@/components/molecules/PopularRadio/PopularRadioWrapper";
import { RadioContainer } from "@/components/molecules/RadioDetails/RadioContainer";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";
import { IRadio } from "@/api/RadioApi";

interface Props {
  radioStore: RadioStore;
  setRadio: React.Dispatch<IRadio | undefined>;
  radio: IRadio | undefined;
}

const Main: React.FC<Props> = ({ radioStore, setRadio, radio }) => {
  const { radioId } = useParams();

  const reFetchRadio = async () => {
    const cache = await radioStore.fetchRadio(Number(radioId));
    setRadio(cache);
  };

  useEffect(() => {
    reFetchRadio();
  }, [radioId]);

  if (radio) {
    return <RadioContainer radio={radio} />;
  }

  throw (async () => {
    reFetchRadio();
  })();
};

export const RadioDetail = observer((props: { rootStore: RootStore }) => {
  const { rootStore } = props;
  const { radioStore } = rootStore;
  const { radioId } = useParams();

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
  }, [radioStore.radios, radioId]);

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
