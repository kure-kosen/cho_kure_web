import styled from "styled-components";
import { chkColors } from "./color";

export const ChkButtonBase = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px;
  color: white;
  outline: none;
  border-style: none;
  box-shadow: 4px 3px 10px 0px ${chkColors.shadow};
`;
