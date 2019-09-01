import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useCalculateItems } from "@/utils/hooks/useCalculateItems";

interface IProps {
  children: any[];
}

export const AwesomeCardsWrapper = ({ children }: IProps) => {
  const ref = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.offsetWidth);
  }, [ref, width]);

  const [wrapperRef, cards] = useCalculateItems({
    width,
    length: children.length
  });

  const CardSpacer = React.cloneElement(children[0], {
    hidden: true
  });

  const childrenWithRef = React.Children.map(children, (child, i) => {
    if (i === 0) {
      return React.cloneElement(child, { setRef: ref, key: Math.random() });
    } else return child;
  });

  return (
    <Wrapper ref={wrapperRef}>
      {childrenWithRef}
      {[...Array(cards).keys()].map(_ => CardSpacer)}
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
