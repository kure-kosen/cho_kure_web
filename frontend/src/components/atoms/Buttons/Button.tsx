import styled, { css } from "styled-components";
import { BaseButton } from "./Base";

export const Button = styled(BaseButton)`
  color: rgba(0, 0, 0, 0.56);
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
`;

export const ShadowButton = styled(BaseButton)`
  box-shadow: 4px 3px 10px 0px ${({ theme }) => theme.color.shadow};
`;

export const OrangeButton = styled(BaseButton)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.orange};
  width: 200px;
`;

export const BlueButton = styled(BaseButton)`
  ${({ inverse }) =>
    inverse
      ? css`
          color: ${({ theme }) => theme.color.blue};
          border: 1px solid ${({ theme }) => theme.color.blue};
        `
      : css`
          color: ${({ theme }) => theme.color.white};
          background-color: ${({ theme }) => theme.color.blue};
        `}
`;
