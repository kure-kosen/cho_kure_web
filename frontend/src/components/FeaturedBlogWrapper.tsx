import * as React from "react";
import styled from "styled-components";

import { chkColors } from "./../commons/color";

import MoreButton from "./MoreButton";

import { FeaturedBlog } from "./FeaturedBlog";

export const FeaturedBlogWrapper = () => (
  <Wrapper>
    <Title>BLOG</Title>
    <BlogWrapper>
      <FeaturedBlog
        title="news title"
        date="YYYY/MM/DD"
        summary="人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
        人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
        author="だれかさん"
        to="/blog"
      />
      <FeaturedBlog
        title="news title"
        date="YYYY/MM/DD"
        summary="人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
        人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
        author="だれかさん"
        to="/blog"
      />
      <FeaturedBlog
        title="news title"
        date="YYYY/MM/DD"
        summary="人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
        人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。"
        author="だれかさん"
        to="/blog"
      />
    </BlogWrapper>
    <MoreButton to="/blog" />
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${chkColors.aqua};
  margin: 10px;
  padding: 50px 40px;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${chkColors.white};
`;

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
