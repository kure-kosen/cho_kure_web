import { ComponentPropsWithRef } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export type ButtonSize = "large" | "medium" | "small" | "xSmall";

export type ButtonSizes = {
  [size in ButtonSize]: {
    size: number;
    fontSize: number;
  }
};

export const buttonSizes: ButtonSizes = {
  large: {
    size: 44,
    fontSize: 16
  },
  medium: {
    size: 36,
    fontSize: 14
  },
  small: {
    size: 32,
    fontSize: 14
  },
  xSmall: {
    size: 28,
    fontSize: 12
  }
};

export const minWidthStyle = (unit?: number) => {
  if (!unit || unit === 0) {
    return null;
  }
  return css`
    min-width: ${unit}px;
  `;
};

export const buttonSizeStyle = (buttonSize: ButtonSize = "medium") => {
  const { size, fontSize } = buttonSizes[buttonSize];
  return css`
    height: ${size}px;
    line-height: ${size}px;
    font-size: ${fontSize}px;
  `;
};

export type ButtonProps = {
  size?: ButtonSize;
  disabled?: boolean;
  minWidth?: number;
} & Partial<ComponentPropsWithRef<"button">> &
  Partial<ComponentPropsWithRef<"a">> &
  Partial<ComponentPropsWithRef<typeof Link>>;

export const BaseButton = styled.button<ButtonProps>`
  display: block;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 600;
  margin: 0;

  border-radius: ${({ theme }) => theme.utils.unitPx(3)};
  padding-left: ${({ theme }) => theme.utils.unitPx(2)};
  padding-right: ${({ theme }) => theme.utils.unitPx(2)};

  transition: 200ms all;

  ${({ minWidth }) => minWidthStyle(minWidth)}
  ${({ size }) => buttonSizeStyle(size)};

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;
