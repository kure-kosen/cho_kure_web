import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { device, color } from "@/constants/styles";

import RootStore from "@/stores/RootStore";

import { RadioDetailHeroArea } from "@/components/molecules/HeroArea/RadioDetailHeroArea";
import TweetStream from "@/components/atoms/Features/TweetStream";

import PopularRadioWrapper from "@/components/molecules/PopularRadio/PopularRadioWrapper";

import { RadioPlayer } from "@/components/molecules/RadioDetails/RadioPlayer";
import { TwitterIcon, FacebookIcon } from "@/icons";

const MOCK_DATA = {
  id: 13,
  title: "#13 飲食店バグハンター",
  description:
    "最近やっていること、Ruby25周年、else if、コードゴルフ、ちょっくれサイトの仕組み、IoTなどの話をしました。",
  mp3: {
    url:
      "https://cho-kure-web-s3.s3.amazonaws.com/uploads/radio/mp3/13/ck013.mp3"
  },
  image:
    "https://cho-kure-web-s3.s3.amazonaws.com/uploads/radio/image/13/thumb_ck013.png",
  playTime: "32:52",
  duration: 1972,
  personalities: [
    {
      id: 2,
      name: "金子 平",
      nickname: "",
      description:
        "サーバー側の開発を担当してます。\n初の本科生パーソナリティの枠はいただきました！！！ ",
      image:
        "https://cho-kure-web-s3.s3.amazonaws.com/uploads/personality/image/2/thumb_IMG_0880_copy.JPG",
      tagList: ["本科生", "電気科", "開発", "冬眠中"]
    },
    {
      id: 3,
      name: "中村 優",
      nickname: "ちゃんゆー",
      description:
        "こんにちは。ちゃんゆーだよ！\nフロントエンド開発やTwitter解析とかをしてるよ！ わーい！",
      image:
        "https://cho-kure-web-s3.s3.amazonaws.com/uploads/personality/image/3/thumb_img_7944_1024.jpg",
      tagList: ["専攻科", "開発", "広報"]
    },
    {
      id: 7,
      name: "梶 凌太",
      nickname: "",
      description:
        "バックエンドの開発担当。\nどんなことも、まずやってみる。\nやる気が出るのは、やり始めてから！",
      image:
        "https://cho-kure-web-s3.s3.amazonaws.com/uploads/personality/image/7/thumb_s__25108524.jpg",
      tagList: ["本科生", "電気科", "開発"]
    },
    {
      id: 14,
      name: "小畠 一泰",
      nickname: "こばくん",
      description:
        "Web Frontend Engineerをやりながら地図作ったり、ペットボトル飛ばしたりする人です",
      image:
        "https://cho-kure-web-s3.s3.amazonaws.com/uploads/personality/image/14/thumb_83JHKvBf_400x400.jpg",
      tagList: ["本科生", "電気科", "開発"]
    }
  ],
  comic: null
};

import Personalities from "@/components/molecules/Personalities";

export const RadioDetail = (props: { rootStore: RootStore }) => {
  // const { rootStore } = props;
  // const { radioStore } = rootStore;

  return (
    <div>
      <RadioDetailHeroArea>{MOCK_DATA.title}</RadioDetailHeroArea>
      <Contrainer>
        <Sidebar>
          <PopularRadioWrapper />
          <TweetStream />
        </Sidebar>
        <MainContentWrapper>
          <Top>
            <Left>
              <RadioPlayer {...MOCK_DATA} />
            </Left>
            <Right>
              <Title>{MOCK_DATA.title}</Title>
              <Description>
                <ReactMarkdown source={MOCK_DATA.description} />
              </Description>
              <SNS>
                <TwitterIcon id={""} />
                <FacebookIcon id={""} />
                <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  class="twitter-share-button"
                  data-text="hoge"
                  data-via="cho_kure"
                  data-hashtags="ちょっくれ"
                  data-related="cho_kure"
                  data-lang="ja"
                  data-show-count="true"
                >
                  Tweet
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                />
              </SNS>
            </Right>
          </Top>
          <Bottom>
            <Personalities personalities={MOCK_DATA.personalities} />
          </Bottom>
        </MainContentWrapper>
      </Contrainer>
    </div>
  );
};

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
  padding-top: 50px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;
const Left = styled.div`
  width: 50%;
  padding-right: 50px;
`;

const Right = styled.div`
  width: 50%;
  padding-right: 50px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: left;
  color: ${color.BLUE};
`;

const Description = styled.div``;
const SNS = styled.div``;

const Bottom = styled.div`
  width: 100%;
`;
