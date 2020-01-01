import styled from "styled-components";
import { BaseButton } from "./Base";

export const Button = styled(BaseButton)`
  color: rgba(0, 0, 0, 0.56);
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;

  &:disabled {
    color: rgba(0, 0, 0, 0.24);
    background-color: rgba(0, 0, 0, 0.06);
    box-shadow: none;
  }
`;

export const ShadowButton = styled(BaseButton)`
  box-shadow: 4px 3px 10px 0px ${({ theme }) => theme.color.shadow};
`;

export const StyledMoreButton = styled(BaseButton)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.orange};
  width: 200px;
`;
