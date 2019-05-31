const EMAIL_REGEXP = /^([\w])+([\w\._-])*@([\w_-])+\.([\w\._-]+)+$/;

export interface IValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export const notValidate = (_: any) => {
  return {
    isValid: true
  };
};

export const validateEmail = (email: string): IValidationResult => {
  if (!email) {
    return {
      isValid: false,
      errorMessage: "メールアドレスを入力してください。"
    };
  }
  if (!EMAIL_REGEXP.test(email)) {
    return {
      isValid: false,
      errorMessage: "有効なメールアドレスではありません。"
    };
  }
  return { isValid: true };
};

export type ValidationMethods = typeof validateEmail | typeof notValidate;
