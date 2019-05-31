import * as React from "react";
import styled, { css } from "styled-components";

import { chkColors } from "../../commons/color";
import { IValidationResult, ValidationMethods, notValidate } from "../../utils/validation";

type TextInputType = "text" | "password" | "email";

export interface ITextInputProps {
  value?: string;
  name?: string;
  placeholder?: string;
  type?: TextInputType;
  multiLine?: boolean;
  validation?: ValidationMethods;
  onChange?(value: string): void;
}

export default ({
  value,
  name,
  placeholder,
  multiLine,
  onChange,
  validation = notValidate,
  type = "text"
}: ITextInputProps) => {
  const [currentInputValue, setCurrentInputValue] = React.useState("");
  const [validationResult, setValidationResult] = React.useState({ isValid: true } as IValidationResult);
  const [inFocus, setInFocus] = React.useState(false);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const data = e.target.value;
    setCurrentInputValue(data);

    if (onChange) {
      onChange(data);
    }
  }, []);

  React.useEffect(
    () => {
      if (validation) {
        if (!currentInputValue) return;
        setValidationResult(validation(currentInputValue));
      }
    },
    [currentInputValue, inFocus]
  );

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
    styledFocus: inFocus ? true : false,
    validationResult: validationResult.isValid
  };

  return (
    <div>
      {multiLine ? (
        <>
          <StyledTextarea {...props} rows={4} />
          {validationResult && validationResult.isValid ? null : <span>{validationResult.errorMessage}</span>}
        </>
      ) : (
        <>
          <StyledInput {...props} />
          {validationResult && validationResult.isValid ? null : <span>{validationResult.errorMessage}</span>}
        </>
      )}
    </div>
  );
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
  border: 2px solid ${(props: any) => (props.validationResult ? "#00afec" : chkColors.error)};
  border-radius: 1.5rem;

  ::placeholder {
    color: #00afec;
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: #00afec;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px #fff inset;
  }
`;

const StyledInput = styled.input`
  ${style};
`;

const StyledTextarea = styled.textarea`
  ${style}
`;
