import React from "react";
import styled from "styled-components";
import {
  buttonSizes,
  ButtonSize as ButtonSizeType
} from "@/components/atoms/Buttons/Base";
import {
  Button,
  BlueButton as StyledBlueButton
} from "@/components/atoms/Buttons/Button";

export default {
  title: "Buttons"
};

export const NormalButton = () => (
  <div>
    <Section>
      <p>Button</p>
      <Button maxWidth={200}>Button</Button>
    </Section>

    <Section>
      <p>Disabled</p>
      <Button maxWidth={200} disabled>
        Button
      </Button>
    </Section>
  </div>
);

export const BlueButton = () => (
  <div>
    <Section>
      <p>Button</p>
      <StyledBlueButton maxWidth={200}>Button</StyledBlueButton>
    </Section>

    <Section>
      <p>Inverse</p>
      <StyledBlueButton maxWidth={200} inverse>
        Button
      </StyledBlueButton>
    </Section>
  </div>
);

export const ButtonSize = () =>
  Object.keys(buttonSizes).map(size => (
    <Section>
      <p>{size}</p>
      <Button maxWidth={200} size={size as ButtonSizeType}>
        Button
      </Button>
    </Section>
  ));

const Section = styled.div`
  margin-top: 50px;
`;
