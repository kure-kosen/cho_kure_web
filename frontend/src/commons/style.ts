import { injectGlobal } from "styled-components";

const breakpoints = {
  mobile: "40.0rem",
  tablet: "80.0rem",
};

export const media = {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
};

injectGlobal`
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
         -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
            box-sizing: border-box;
  }
`;
