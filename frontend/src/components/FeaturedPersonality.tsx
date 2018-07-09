import * as React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";
import { FeaturedPersonalityListenToRadioButton } from "./../components/FeaturedPersonalityListenToRadioButton";

import * as chanyou from "./../../images/chanyou.jpg";

export const FeaturedPersonality = () => (
  <FeaturedPersonalityStyle>
    <PictureArea />
    <ModalIntroduction>
      こんにちは。ちゃんゆーだよ！<br />
      フロントエンド開発やTwitter解析とかをしてるよ！ わーい！
    </ModalIntroduction>
    <DescriptionArea>
      <Name>中村 優</Name>
      <NickName>ちゃんゆー</NickName>
      <Affiliation>
        呉高専工業高等専門学校専攻科<br />
        プロジェクトデザイン工学専攻
      </Affiliation>
      <FeaturedPersonalityListenToRadioButton />
    </DescriptionArea>
  </FeaturedPersonalityStyle>
);

const FeaturedPersonalityStyle = styled.div`
  width: 350px;
  height: 500px;
  margin: 0 auto 15px auto;
  border-radius: 8px;
  color: ${chkColors.black};
  font-weight: bold;
  border: 3px solid ${chkColors.skyblue};
  background-color: ${chkColors.white};
  box-shadow: 4px 3px 10px 0px ${chkColors.shadow};
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
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  font-size: 1.1rem;
  line-height: 1.8rem;
  visibility: hidden;

  ${FeaturedPersonalityStyle}:hover & {
    visibility: visible;
  }
`;

const PictureArea = styled.div`
  width: 100%;
  height: 305px;
  background-image: url(${chanyou});
`;

const DescriptionArea = styled.div`
  height: auto;
  padding: 20px 30px;
  border-top: 3px solid ${chkColors.skyblue};
`;

const Name = styled.span`
  font-size: 1.2rem;
  color: ${chkColors.black};
`;

const NickName = styled.span`
  margin-left: 20px;
  color: ${chkColors.blue};
  font-size: 0.8rem;
  line-height: 1.25rem;
  vertical-align: bottom;
`;

const Affiliation = styled.div`
  padding: 15px 8px;
  line-height: 1.5rem;
`;
