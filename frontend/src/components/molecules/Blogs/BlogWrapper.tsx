import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

import MoreButton from "@/components/atoms/Buttons/MoreButton";
import FeaturedBlog from "@/components/atoms/Blog/FeaturedBlog";

export default () => (
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
  background-color: ${color.AQUA};
  padding: 50px 40px;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${color.WHITE};
`;

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
