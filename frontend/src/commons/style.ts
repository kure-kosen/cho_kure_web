import { createGlobalStyle, css } from "styled-components";
import GlobalFonts from "./font";

const breakpoints = {
  mobile: "40.0rem",
  tablet: "80.0rem"
};

export const media = {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`
};

export const title = css`
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-align: left;
  color: #00afec;
`;

export const goodSpace = css`
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

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }

  ${GlobalFonts}

  body {
    font-family: "Quicksand";
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  nav {
    display: inline;
  }
`;

export default GlobalStyle;
