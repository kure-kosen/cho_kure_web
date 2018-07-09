import * as React from "react";
import styled from "styled-components";
import * as img from "./../../images/1d4633a2034e71e3992efe6776fcce91-1.png";

export const FeaturedBlogWrapper = () => (
  <FeaturedBlogWrapperStyle>
    <TitleWrapper>
      <Title>
        BLOG
      </Title>
  		</TitleWrapper>
  		<BlogWrapper>
  	    <BlogPartsWrapper>
  			  <Picture></Picture>
  			  <Sentence>
  				  <NewsTitle>newstitle</NewsTitle>
  					<Article>
  					  人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
  					  人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
  					  <br></br>
  					  <NameDates>
  					  YYYY/MM/DD
  					  <Icon></Icon>
  					  だれかさん
  					  </NameDates>
  				  </Article>
  				</Sentence>	
   			</BlogPartsWrapper>
   			<BlogPartsWrapper>
  				<Picture></Picture>
  				<Sentence>
  					<NewsTitle>newstitle</NewsTitle>
  					<Article>
  						人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
  						人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
  						<br></br>
  						<NameDates>
  						YYYY/MM/DD
  						<Icon></Icon>
  						だれかさん
  						</NameDates>
  					</Article>
  				</Sentence>	
   			</BlogPartsWrapper>
   			<BlogPartsWrapper>
  				<Picture></Picture>
  				<Sentence>
  					<NewsTitle>newstitle</NewsTitle>
  					<Article>
  						人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
  						人の世界は住みにくい人の世界は住みにくい人の世界は住みにくい。
  						<br></br>
  						<NameDates>
  						YYYY/MM/DD
  						<Icon></Icon>
  						だれかさん
  						</NameDates>
  					</Article>
  				</Sentence>	
   			</BlogPartsWrapper>
  		</BlogWrapper>
    <Container>
      <Button>more</Button>
    </Container>
  </FeaturedBlogWrapperStyle>
);

const FeaturedBlogWrapperStyle = styled.div`
  color: white;
  background-color: #b3dfe2;
  height: 600px;
  margin: 8px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px gray;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const TitleWrapper = styled.section`
  padding: 0.8em;
`;

const BlogWrapper = styled.section`
  padding: 1em 2em 1em 2em;
`;

const BlogPartsWrapper = styled.section`
  margin: 0px 0px 20px 0px;
  overflow: hidden;
  display: block;
  clear: both;
`;

const Picture = styled.div`
  background-image: url(${img});
  height: 120px;
  width: 120px;
  border-radius: 10px;
  border: solid thin #e6ba4b;
  float: left;
`;

const Sentence = styled.div`
  margin: 0px 0px 10px 30px;
  float: left;
`;

const NewsTitle = styled.h3`
  padding: 0px;
  margin: 0px 0px 10px 0px;
  font-size: 1.3em;
  color: white;
`;

const Article = styled.p`
  padding: 0px 30px 0px 0px;
  margin: 0px;
  color: white;
  word-break: break-all;
  position: absolute;
`;

const NameDates = styled.p`
  padding: 5px 0px 0px 0px;
  margin: 0px;
  color: white;
`;

const Icon = styled.div`
  background-image: url(${img});
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: solid thin #e6ba4b;
  display: inline-block;
  vertical-align: -4px;	
  margin: 0px 20px 0px 20px;
`;

const Button = styled.Button`
	text-align: center;
  display: inline-block;
  padding: 10px 35px;
	border-radius: 25px;
  text-decoration: none;
  color: #FFF;
  background: #eeb73f;
`;

const Container = styled.div`
	text-align: center;
`;

