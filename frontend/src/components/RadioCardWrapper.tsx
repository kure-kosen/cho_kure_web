import * as React from "react";
import styled from "styled-components";

const card = "http://localhost:5000/images/radio-card.png";

export const RadioCardWrapper = () => <RadioCardWrapperStyle />;

const RadioCardWrapperStyle = styled.div`
  width: 282px;
  height: 445px;
  background-image: url(${card});
  background-size: cover;
`;
