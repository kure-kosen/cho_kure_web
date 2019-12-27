import React, { FC } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import { device, color } from "@/constants/styles";
import { CHK } from "@/constants/url";

import { RadioPlayer } from "@/components/molecules/RadioDetails/RadioPlayer";
import Personalities from "@/components/molecules/Personalities";
import { Share } from "@/components/molecules/RadioDetails/Share";

import { IRadio } from "@/api/RadioApi";
import { PersonalityProfileMiniCard } from "@/components/atoms/FeaturedPersonality/PersonalityProfileMiniCard";

interface Props {
  radio: IRadio | undefined;
}

export const RadioContainer: FC<Props> = ({ radio }) => {
  const location = useLocation();
  const SHARE_URL = CHK.FRONT_END.PROD + location.pathname;

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
            <Title>{radio.title}</Title>
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

  return null;
};

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
