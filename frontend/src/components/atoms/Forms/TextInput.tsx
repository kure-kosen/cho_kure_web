import React from "react";
import styled, { css } from "styled-components";

import { color } from "@/constants/styles";
import { IValidationResult, ValidationMethod } from "@/utils/validation";

type TextInputType = "text" | "password" | "email";

export interface ITextInputProps {
  value?: string;
  name?: string;
  placeholder?: string;
  type?: TextInputType;
  multiLine?: boolean;
  validations?: ValidationMethod[];
  onChange?(value: string): void;
}

export default ({
  value,
  name,
  placeholder,
  multiLine,
  onChange,
  validations,
  type = "text"
}: ITextInputProps) => {
  const [currentInputValue, setCurrentInputValue] = React.useState("");
  const [validationErrors, setValidationErrors] = React.useState(
    [] as IValidationResult[]
  );
  const [inFocus, setInFocus] = React.useState(false);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const data = e.target.value;
      setCurrentInputValue(data);

      if (onChange) {
        onChange(data);
      }
    },
    []
  );

  React.useEffect(() => {
    if (validations) {
      if (!currentInputValue) return;

      const newErrors: IValidationResult[] = [];
      validations.forEach(validation => {
        newErrors.push(validation(currentInputValue));
      });
      setValidationErrors(newErrors);
    }
  }, [currentInputValue, inFocus]);

  const handleFocus = React.useCallback(() => {
    setInFocus(true);
  }, []);

  // call: did handleFoucus
  const handleBlur = React.useCallback(() => {
    setInFocus(false);
  }, []);

  React.useEffect(() => {
    if (value != null) {
      setCurrentInputValue(value);
    }
  }, [value]);

  const props = {
    type,
    placeholder,
    onFocus: handleFocus,
    onBlur: handleBlur,
    id: name,
    value: currentInputValue,
    onChange: handleChange,
    styledFocus: inFocus ? true : false,
    validationError:
      validationErrors.filter(v => v.errorMessage).length > 0 ? true : false
  };

  return (
    <div>
      {multiLine ? (
        <>
          <StyledTextarea {...props} rows={4} />
          {validationErrors.length > 0
            ? validationErrors.map((v, i) => (
                <span key={i}>{v.errorMessage}</span>
              ))
            : null}
        </>
      ) : (
        <>
          <StyledInput {...props} />
          {validationErrors.length > 0
            ? validationErrors.map((v, i) => (
                <span key={i}>{v.errorMessage}</span>
              ))
            : null}
        </>
      )}
    </div>
  );
};

const style = css`
  margin: 5px;
  margin-left: 0;
  margin-right: 0;
  padding: 5px;
  padding-left: 30px;
  line-height: 1.5rem;
  width: 100%;
  border: 2px solid
    ${(props: any) => (props.validationError ? color.ERROR : color.BLUE)};
  border-radius: 1.5rem;

  ::placeholder {
    color: ${color.placeholder};
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: ${color.placeholder};
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
