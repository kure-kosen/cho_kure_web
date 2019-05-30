const EMAIL_REGEXP = /^([\w])+([\w\._-])*@([\w_-])+\.([\w\._-]+)+$/;

export interface IValidationResult {
  validity: boolean;
  errorMessage?: string;
}

export const notValidate = (_?: any) => {
  return {
    validity: true
  };
};

export const validateEmail = (email: string): IValidationResult => {
  if (!email) {
    return {
      validity: false,
      errorMessage: "メールアドレスを入力してください。"
    };
  }
  if (!EMAIL_REGEXP.test(email)) {
    return {
      validity: false,
      errorMessage: "有効なメールアドレスではありません。"
    };
  }
  return { validity: true };
};

export type ValidationMethods = typeof validateEmail | typeof notValidate;
