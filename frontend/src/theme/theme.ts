export type ThemeName = "chk";

// export interface Theme {
//   color: {
//     brand: {
//       darkPrimary: string;
//       lightPrimary: string;
//       primary: string;
//     };
//     text: {
//       primary: string;
//       secondary: string;
//     };
//     accent: string;
//     divider: string;
//   };
// }

export interface Theme {
  name: string;
  color: {
    orange: string;
    vividOrange: string;
    blue: string;
    skyBlue: string;
    black: string;
    gray: string;
    shadow: string;
    white: string;
    placeholder: string;
    aqua: string;
    darkAqua: string;
    error: string;
    disabled: string;
  };
}

const chkTheme: Theme = {
  name: "chk",
  color: {
    orange: "#ECB73F",
    vividOrange: "#E59134",
    blue: "#00AFEC",
    skyBlue: "#A8E1E3",
    black: "#565A62",
    gray: "#7f8287",
    shadow: "#14141433",
    white: "#ffffff",
    placeholder: "#b0bec5",
    aqua: "#b3dfe2",
    darkAqua: "#50AAB7",
    error: "#ff4b42",
    disabled: "#cccccc"
  }
};

export const themes = {
  chk: chkTheme
};
