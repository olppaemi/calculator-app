import { GlobalStyle, theme1 } from "globalStyles";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Calculator from "components/Calculator";

const App = () => {
  const [theme, setTheme] = useState(theme1);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Calculator setTheme={setTheme} />
    </ThemeProvider>
  );
};

export default App;
