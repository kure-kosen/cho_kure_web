import { injectGlobal } from "styled-components";

const breakpoints = {
  mobile: "40.0rem",
  tablet: "80.0rem"
};

export const media = {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${
    breakpoints.tablet
  })`
};

export const title = `
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-align: left;
  color: #00afec;
`;

export const goodSpace = `
display: box;
display: -webkit-box;
display: -moz-box;
display: -o-box;
display: -ms-box;
box-pack: justify;
-moz-box-pack: justify;
-webkit-box-pack: justify;
-o-box-pack: justify;
-ms-box-pack: justify;
`;

injectGlobal`
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
         -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
            box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }

  nav {
    display: inline;
  }
`;
