import styled from "styled-components";
import { chkColors } from "./color";
import { media } from "./../commons/style";

export const ChkButtonBase = styled.div`
  display: block;
  color: white;
  outline: none;
  border-style: none;
  box-shadow: 4px 3px 10px 0px ${chkColors.shadow};
  text-align: center;
  margin: 20px auto 0 auto;
  padding: 5px 1rem;
  width: 20%;
  line-height: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${chkColors.orange};

  @media ${media.mobile} {
    width: 50%;
  }
`;
