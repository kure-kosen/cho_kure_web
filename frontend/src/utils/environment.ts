export const isDevelopment = () => {
  return process.env.NODE_ENV === "development";
};

export const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
