import React from "react";
import styled from "styled-components";

import TextInput from "@/components/atoms/Forms/TextInput";

interface IProps {
  name: string;
  placeholder: string;
}

export default ({ name, placeholder }: IProps) => (
  <RadioSearchInputWrapper>
    <RadioSearchInput name={name} placeholder={placeholder} />
  </RadioSearchInputWrapper>
);

const RadioSearchInputWrapper = styled.div`
  margin-bottom: 10px;
`;

const RadioSearchInput = styled(TextInput)``;
