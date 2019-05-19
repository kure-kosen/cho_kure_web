import * as React from "react";
import styled, { css } from "styled-components";

type TextInputType = "text" | "password" | "email";

export interface ITextInputProps {
  value?: string;
  name?: string;
  placeholder?: string;
  type?: TextInputType;
  multiLine?: boolean;
  onChange?(value: string): void;
}

export default ({ value, name, placeholder, multiLine, onChange, type = "text" }: ITextInputProps) => {
  const [currentInputValue, setCurrentInputValue] = React.useState("");
  const [inFocus, setInFocus] = React.useState(false);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const data = e.target.value;
    setCurrentInputValue(data);

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
        setCurrentInputValue(value);
      }
    },
    [value]
  );

  const props = {
    type,
    placeholder,
    onFocus: handleFocus,
    onBlur: handleBlur,
    id: name,
    value: currentInputValue,
    onChange: handleChange,
    styledFocus: inFocus ? true : false
  };

  return multiLine ? <StyledTextarea {...props} rows={4} /> : <StyledInput {...props} />;
};

// TODO: focus時とそうでない時で背景かアウトラインのデザインを変える
const style = css`
  margin: 5px;
  margin-left: 0;
  margin-right: 0;
  padding: 5px;
  padding-left: 30px;
  line-height: 1.5rem;
  width: 100%;
  border: 2px solid #00afec;
  border-radius: 1.5rem;

  ::placeholder {
    color: #00afec;
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: #00afec;
  }
`;

const StyledInput = styled.input`
  ${style};
`;

const StyledTextarea = styled.textarea`
  ${style}
`;
