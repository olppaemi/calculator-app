import { GlobalStyle, theme1, theme2, theme3 } from "globalStyles";
import React, { useState } from "react";
import Header from "sections/Header";
import Keypad from "sections/Keypad";
import Screen from "sections/Screen";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 540px;
`;

const App = () => {
  const [theme, setTheme] = useState(theme1);

  const handleTheme = (theme) => {
    if (theme === 1) {
      setTheme(theme1);
    } else if (theme === 2) {
      setTheme(theme2);
    } else if (theme === 3) {
      setTheme(theme3);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Header handleTheme={handleTheme} />
          <Screen />
          <Keypad />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
