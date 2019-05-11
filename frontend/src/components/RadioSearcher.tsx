import * as React from "react";
import styled from "styled-components";

import { title } from "./../commons/style";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

export const RadioSearcher = () => (
  <Wrapper>
    <RadioSearcherTitle>Search</RadioSearcherTitle>
    <form action="">
      <RadioSearchInputWrapper>
        <RadioSearchInput name="who" type="text" placeholder="誰が" />
      </RadioSearchInputWrapper>
      <RadioSearchInputWrapper>
        <RadioSearchInput name="when" type="text" placeholder="いつ" />
      </RadioSearchInputWrapper>
      <RadioSearchInputWrapper>
        <RadioSearchInput name="what" type="text" placeholder="どんなこと" />
      </RadioSearchInputWrapper>
      <RadioSearchTagButtonWrapper>
        <RadioSearchTagButton name="tag1" type="button">
          tag1
        </RadioSearchTagButton>
        <RadioSearchTagButton name="tag2" type="button">
          tag2
        </RadioSearchTagButton>
        <RadioSearchTagButton name="tag3" type="button">
          tag3
        </RadioSearchTagButton>
      </RadioSearchTagButtonWrapper>
      <RadioSearchTagButtonWrapper>
        <RadioSearchTagButton name="tag4" type="button">
          tag4
        </RadioSearchTagButton>
        <RadioSearchTagButton name="tag5" type="button">
          tag5
        </RadioSearchTagButton>
        <RadioSearchTagButton name="tag6" type="button">
          tag6
        </RadioSearchTagButton>
      </RadioSearchTagButtonWrapper>
      <RadioSearchButton>Search</RadioSearchButton>
    </form>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  color: white;
  padding: 0 20px;
  background-color: #fff;
`;

const RadioSearcherTitle = styled.div`
  ${title};
  color: ${chkColors.blue};
`;

const RadioSearchInputWrapper = styled.div`
  margin-bottom: 10px;
`;

const RadioSearchInput = styled.input`
  padding: 5px;
  padding-left: 30px;
  line-height: 1.5rem;
  width: 100%;
  border: 2px solid ${chkColors.blue};
  border-radius: 1.5rem;
  outline: none;

  ::placeholder {
    color: ${chkColors.placeholder};
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: ${chkColors.placeholder};
  }
`;

const RadioSearchTagButtonWrapper = styled.div`
  width: 100%;
  margin: 0 auto 10px auto;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  display: -o-box;
  display: -ms-box;
  box-pack: justify;
  -moz-box-pack: justify;
  -webkit-box-pack: justify;
  -o-box-pack: justify;
  -ms-box-pack: justify;
`;

const RadioSearchTagButton = styled.button`
  display: block;
  padding: 5px 1rem;
  line-height: 1.5rem;
  color: ${chkColors.blue};
  border: 2px solid ${chkColors.blue};
  background-color: #fff;
  border-radius: 1.5rem;
  outline: none;
`;

const RadioSearchButton = ChkButtonBase.extend`
  margin: 20px auto 0 auto;
  padding: 5px 1rem;
  width: 50%;
  line-height: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${chkColors.orange};
`;
