const EMAIL_REGEXP = /^([\w])+([\w\._-])*@([\w_-])+\.([\w\._-]+)+$/;

export interface IValidationResult {
  errorMessage: string;
}

export const validateEmail = (email: string): IValidationResult => {
  if (!email) {
    return {
      errorMessage: "メールアドレスを入力してください。"
    };
  }
  if (!EMAIL_REGEXP.test(email)) {
    return {
      errorMessage: "有効なメールアドレスではありません。"
    };
  }
  return { errorMessage: "" };
};

export type ValidationMethod = typeof validateEmail;
