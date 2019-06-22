import React from "react";
import { useResizeEvent } from "@/utils/hooks/window-events";

interface IProps {
  width: number;
  length: number;
}

export default ({
  width,
  length
}: IProps): [React.RefObject<HTMLDivElement>, number] => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [items, setItems] = React.useState(0);

  const calculate = React.useCallback(() => {
    if (!ref.current) return;
    const column = Math.floor(ref.current.clientWidth / width);
    const rest = length % column;
    if (isNaN(rest) || rest === 0) {
      setItems(0);
    } else {
      setItems(column - rest);
    }
  }, [ref]);

  React.useEffect(() => {
    calculate();
  }, []);

  useResizeEvent(calculate);

  return [ref, items];
};
