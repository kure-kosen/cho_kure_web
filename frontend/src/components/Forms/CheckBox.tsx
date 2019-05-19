import * as React from "react";
import styled from "styled-components";

export interface ITextInputProps {
  children: string;
  checked: boolean;
  name?: string;
  onChange?(value: boolean): void;
}

export default ({ checked, name, onChange, children }: ITextInputProps) => {
  const [currentChecked, setCurrentChecked] = React.useState(checked);
  const [inFocus, setInFocus] = React.useState(false);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.checked;
    setCurrentChecked(data);

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
      if (checked !== null) {
        setCurrentChecked(checked);
      }
    },
    [checked]
  );

  const props = {
    onFocus: handleFocus,
    onBlur: handleBlur,
    id: name,
    checked: currentChecked,
    onChange: handleChange,
    styledFocus: inFocus ? true : false
  };

  return (
    <label>
      <StyledCheckBox {...props} type="checkbox" />
      {children}
    </label>
  );
};

// TODO: focus時とそうでない時で背景かアウトラインのデザインを変える
const StyledCheckBox = styled.input`
  margin-left: 20px;
  margin-right: 10px;
`;
