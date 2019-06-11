import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

import PersonalityListenToRadioButton from "@/components/atoms/FeaturedPersonality/PersonalityListenToRadioButton";

import chanyou from "./chanyou.jpg";

export default () => (
  <FeaturedPersonalityStyle>
    <PictureArea />
    <ModalIntroduction>
      こんにちは。ちゃんゆーだよ！
      <br />
      フロントエンド開発やTwitter解析とかをしてるよ！ わーい！
      <SNSArea>
        <Circle>
          <i className="fab fa-twitter fa-fw" />
        </Circle>
        <Circle>
          <i className="fab fa-facebook-f fa-fw" />
        </Circle>
        <Circle>
          <i className="fab fa-instagram fa-fw" />
        </Circle>
      </SNSArea>
    </ModalIntroduction>
    <DescriptionArea>
      <Name>中村 優</Name>
      <NickName>ちゃんゆー</NickName>
      <Affiliation>
        呉高専工業高等専門学校専攻科
        <br />
        プロジェクトデザイン工学専攻
      </Affiliation>
      <PersonalityListenToRadioButton />
    </DescriptionArea>
  </FeaturedPersonalityStyle>
);

const FeaturedPersonalityStyle = styled.div`
  width: 350px;
  height: 500px;
  margin: 0 auto 15px auto;
  border-radius: 8px;
  color: ${color.BLACK};
  font-weight: bold;
  border: 3px solid ${color.SKY_BLUE};
  background-color: ${color.WHITE};
  box-shadow: 4px 3px 10px 0px ${color.SHADOW};
  position: relative;
`;

const ModalIntroduction = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: calc(305px - 30px);
  margin: 15px;
  margin-bottom: 100px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  font-size: 1.1rem;
  line-height: 1.8rem;
  visibility: hidden;

  ${FeaturedPersonalityStyle}:hover & {
    visibility: visible;
  }
`;

const SNSArea = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 35px;
`;

const Circle = styled.div`
  float: left;
  font-size: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${color.ORANGE};
  color: rgba(255, 255, 255, 0.8);
`;

const PictureArea = styled.div`
  width: calc(100% + 6px);
  height: 305px;
  margin-top: -3px;
  margin-left: -3px;
  background-image: url(${chanyou});
  background-color: ${color.SKY_BLUE};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top: 3px solid ${color.SKY_BLUE};
  border-left: 3px solid ${color.SKY_BLUE};
  border-right: 3px solid ${color.SKY_BLUE};
`;

const DescriptionArea = styled.div`
  height: auto;
  padding: 20px 30px;
  border-top: 3px solid ${color.SKY_BLUE};
`;

const Name = styled.span`
  font-size: 1.2rem;
  color: ${color.BLACK};
`;

const NickName = styled.span`
  margin-left: 20px;
  color: ${color.BLUE};
  font-size: 0.8rem;
  line-height: 1.25rem;
  vertical-align: bottom;
`;

const Affiliation = styled.div`
  padding: 15px 8px;
  line-height: 1.5rem;
`;