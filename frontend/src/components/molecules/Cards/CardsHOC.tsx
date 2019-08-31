import React from "react";
import styled from "styled-components";

import { useCalculateItems } from "@/utils/hooks/useCalculateItems";

interface IProps<T> {
  CardComponent: any;
  data: T[];
  width: number;
  defaultProps: {};
}

export const CardsHOC = <T extends {}>({
  CardComponent,
  data,
  width,
  defaultProps
}: IProps<T>) => {
  const [wrapperRef, cards] = useCalculateItems({
    width,
    length: data.length
  });

  return (
    <Wrapper ref={wrapperRef}>
      {data.map((v, i) => (
        <CardComponent key={i} {...v} />
      ))}
      {[...Array(cards).keys()].map(i => (
        <CardComponent key={i} {...defaultProps} hidden />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
`;
