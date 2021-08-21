import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }

  html {    
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    background-color: ${({ theme }) => theme.mainBg};
  }

  button {
    font-family: inherit;    
  }
`;

export const theme1 = {
  mainBg: "hsl(222, 26%, 31%)",
  keypadBg: "hsl(223, 31%, 20%)",
  screenBg: "hsl(224, 36%, 15%)",

  keyPrimary: "hsl(30, 25%, 89%)",
  keyPrimaryShadow: "hsl(28, 16%, 65%)",

  keySecondary: "hsl(225, 21%, 49%)",
  keySecondaryShadow: "hsl(224, 28%, 35%)",

  keySecondaryVariant: "hsl(6, 63%, 50%)",
  keySecondaryVariantShadow: "hsl(6, 70%, 34%)",

  textHeader: "hsl(0, 0%, 100%)",
  textScreen: "hsl(0, 0%, 100%)",
  textKey: "hsl(221, 14%, 31%)",
  textKey2: "hsl(0, 0%, 100%)",
  textKey3: "hsl(0, 0%, 100%)",
};

export const theme2 = {
  mainBg: "hsl(0, 0%, 90%)",
  keypadBg: "hsl(0, 5%, 81%)",
  screenBg: "hsl(0, 0%, 93%)",

  keyPrimary: "hsl(30, 25%, 89%)",
  keyPrimaryShadow: "hsl(28, 16%, 65%)",

  keySecondary: "hsl(185, 42%, 37%)",
  keySecondaryShadow: "hsl(185, 58%, 25%)",

  keySecondaryVariant: "hsl(25, 98%, 40%)",
  keySecondaryVariantShadow: "hsl(25, 99%, 27%)",

  textHeader: "hsl(60, 10%, 19%)",
  textScreen: "hsl(60, 10%, 19%)",
  textKey: "hsl(60, 10%, 19%)",
  textKey2: "hsl(0, 0%, 100%)",
  textKey3: "hsl(0, 0%, 100%)",
};

export const theme3 = {
  mainBg: "hsl(268, 75%, 9%)",
  keypadBg: "hsl(268, 71%, 12%)",
  screenBg: "hsl(268, 71%, 12%)",

  keyPrimary: "hsl(268, 47%, 21%)",
  keyPrimaryShadow: "hsl(290, 70%, 36%)",

  keySecondary: "hsl(281, 89%, 26%)",
  keySecondaryShadow: "hsl(285, 91%, 52%)",

  keySecondaryVariant: "hsl(176, 100%, 44%)",
  keySecondaryVariantShadow: "hsl(177, 92%, 70%)",

  textHeader: "hsl(52, 100%, 62%)",
  textScreen: "hsl(52, 100%, 62%)",
  textKey: "hsl(52, 100%, 62%)",
  textKey2: "hsl(0, 0%, 100%)",
  textKey3: "hsl(198, 20%, 13%)",
};
