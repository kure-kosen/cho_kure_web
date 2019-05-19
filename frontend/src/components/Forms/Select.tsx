import * as React from "react";
import styled from "styled-components";

// TODO: childrenの型が分からない
export interface ITextInputProps {
  children: any;
  value?: string;
  name?: string;
  onChange?(value: string): void;
}

export default ({ value, name, onChange, children }: ITextInputProps) => {
  const [currentValue, setCurrentValue] = React.useState(value);
  const [inFocus, setInFocus] = React.useState(false);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = e.target.value;
    setCurrentValue(data);

    if (onChange) {
      onChange(data);
    }
  }, []);

  const handleFocus = React.useCallback(() => {
    setInFocus(true);
  }, []);

  // call: did handleFoucus
  const handleBlur = React.useCallback(() => {
    setInFocus(false);
  }, []);

  React.useEffect(
    () => {
      if (value != null) {
        setCurrentValue(value);
      }
    },
    [value]
  );

  const props = {
    onFocus: handleFocus,
    onBlur: handleBlur,
    id: name,
    value: currentValue,
    onChange: handleChange,
    styledFocus: inFocus ? true : false
  };

  return <StyledSelect {...props}>{children}</StyledSelect>;
};

// TODO: focus時とそうでない時で背景かアウトラインのデザインを変える
const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  line-height: 1.5rem;
  padding: 5px;
  padding-left: 30px;
  border: 2px solid #00afec;
  border-radius: 1.5rem;
  background: none transparent;
  vertical-align: middle;
  color: #00afec;
`;
