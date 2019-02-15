import styled from "styled-components";
import { chkColors } from "./color";

export const ChkButtonBase = styled.div`
  display: block;
  color: white;
  outline: none;
  border-style: none;
  box-shadow: 4px 3px 10px 0px ${chkColors.shadow};
  text-align: center;
  margin: 0;
  padding: 10px;
  width: 100%;
  line-height: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${chkColors.orange};
`;
