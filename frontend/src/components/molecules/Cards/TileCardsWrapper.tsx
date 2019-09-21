import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo
} from "react";
import styled from "styled-components";
import { useResizeEvent } from "@/utils/hooks/window-events";

export const TileCardsWrapper = ({ children }: { children: any[] }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => setLength(children.length), [children.length]);

  useEffect(() => {
    if (!wrapperRef.current) return;
    setWrapperWidth(wrapperRef.current.clientWidth);
  }, [wrapperRef.current]);

  useEffect(() => {
    if (!cardRef.current) return;
    setCardWidth(cardRef.current.offsetWidth);
  }, [cardRef.current]);

  const firstCard = React.cloneElement(children[0], { forwardRef: cardRef });

  const otherCards = useMemo(() => children.length > 1 && children.slice(1), [
    length
  ]);

  const paddingItems = useMemo(() => {
    if (!wrapperWidth || !cardWidth) return 0;
    const column = Math.floor(wrapperWidth / cardWidth);
    const rest = length % column;
    if (isNaN(rest) || column === Infinity || rest === 0) {
      return 0;
    } else {
      return column - rest;
    }
  }, [wrapperRef, cardRef, wrapperWidth, cardWidth, length]);

  const resizeListener = useCallback(() => {
    if (!wrapperRef.current) return;
    setWrapperWidth(wrapperRef.current.clientWidth);
  }, [wrapperWidth]);

  useResizeEvent(resizeListener, 400);

  return (
    <Wrapper ref={wrapperRef}>
      {firstCard}
      {otherCards}
      {[...Array(paddingItems).keys()].map(i => (
        <CardSpacer width={cardWidth} key={10000 + i} />
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

const CardSpacer = styled.div<{ width?: number }>`
  height: 0;
  width: ${props => props.width || 0}px;
  margin: 0 auto;
`;
