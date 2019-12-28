import React from "react";
import styled from "styled-components";
import { color, heading } from "@/constants/styles";

import MoreButton from "@/components/atoms/Buttons/MoreButton";
import { RadioMiniCard } from "@/components/atoms/PopularRadio/RadioMiniCard";
import { IRadio } from "@/api/RadioApi";
import { Link } from "react-router-dom";

interface Props {
  radios: IRadio[] | undefined;
}

export const PopularRadiosWrapper = ({ radios }: Props) => (
  <PopularRadioWrapperStyle>
    <Title>popular radio</Title>

    <PopularRadioCardWrapper>
      {radios &&
        radios.map(({ id, title, image }) => (
          <Link to={`/radios/${id}`}>
            <RadioMiniCard radio={{ title, image }} />
          </Link>
        ))}
    </PopularRadioCardWrapper>

    <MoreButton to="/radios" />
  </PopularRadioWrapperStyle>
);

const PopularRadioWrapperStyle = styled.div`
  width: 100%;
  color: ${color.WHITE};
  background-color: ${color.WHITE};
  height: auto;
`;

const Title = styled.div`
  ${heading}
  color: ${color.BLUE};
  padding: 10px 20px;
`;

const PopularRadioCardWrapper = styled.div`
  width: auto;
  height: auto;
  div {
    margin: 5px 0;
  }
`;
