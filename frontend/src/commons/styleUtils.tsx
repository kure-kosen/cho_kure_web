const breakpoints = {
  mobile: "40.0rem",
  tablet: "80.0rem",
};

export const media = {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
};
