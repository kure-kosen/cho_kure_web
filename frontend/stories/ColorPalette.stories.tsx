import React from "react";
import styled from "styled-components";
import { themes } from "../src/theme/theme";

export default {
  title: "Core"
};

export const ColorPalette = () => {
  return (
    <Wrapper>
      {Object.keys(themes).map(themeName => {
        // @ts-ignore
        const theme = themes[themeName];
        return (
          <>
            <TitleWrapper>
              <Title>{theme.name}</Title>
            </TitleWrapper>
            <StyledColorPalette>
              {Object.keys(theme.color).map(color => (
                <ColorItem color={theme.color[color]}>
                  <ColorName>{color}</ColorName>
                </ColorItem>
              ))}
            </StyledColorPalette>
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  flex: 0 0 10%;
`;

const Title = styled.h3``;

const StyledColorPalette = styled.div`
  flex: 0 0 90%;
`;

const ColorItem = styled.div`
  height: 70px;
  width: 500px;
  background-color: ${({ color }) => color};
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

const ColorName = styled.span``;
