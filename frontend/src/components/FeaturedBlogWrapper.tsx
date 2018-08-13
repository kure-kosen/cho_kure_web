import * as React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";
import { ChkButtonBase } from "./../commons/ChkButtonBase";

import { FeaturedBlog } from "./FeaturedBlog";

export const FeaturedBlogWrapper = () => (
  <FeaturedBlogWrapperStyle>
    <TitleWrapper>
      <Title>BLOG</Title>
    </TitleWrapper>
    <BlogWrapper>
      <FeaturedBlog
        Title="newstitle"
        Date="YYYY/MM/DD"
        Article="人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
        人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
        Author="だれかさん"
      />
      <FeaturedBlog
        Title="newstitle"
        Date="YYYY/MM/DD"
        Article="人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
        人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
        Author="だれかさん"
      />
      <FeaturedBlog
        Title="newstitle"
        Date="YYYY/MM/DD"
        Article="人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
        人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
        Author="だれかさん"
      />
    </BlogWrapper>
    <Container>
      <Button>more</Button>
    </Container>
  </FeaturedBlogWrapperStyle>
);

const FeaturedBlogWrapperStyle = styled.div`
  color: white;
  background-color: ${chkColors.aqua};
  height: 600px;
  margin: 8px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px gray;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${chkColors.white};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const TitleWrapper = styled.div`
  padding-top: 10px;
`;

const BlogWrapper = styled.div`
  padding: 5px 20px;
`;

const Button = ChkButtonBase.extend`
  text-align: center;
  display: inline-block;
  width: 20%;
  padding: 10px 35px;
  border-radius: 25px;
  text-decoration: none;
  color: ${chkColors.white};
  background: ${chkColors.orange};
`;

const Container = styled.div`
  text-align: center;
`;