import React, { useState } from "react";
import Header from "components/Calculator/Header";
import Keypad from "components/Calculator/Keypad";
import Screen from "components/Calculator/Screen";
import { theme1, theme2, theme3 } from "globalStyles";
import { Container, Wrapper } from "./CalculatorElements";

const Calculator = ({ setTheme }) => {
  const handleTheme = (theme) => {
    switch (theme) {
      case 1:
        setTheme(theme1);
        break;
      case 2:
        setTheme(theme2);
        break;
      case 3:
        setTheme(theme3);
        break;
      default:
        setTheme(theme1);
        break;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Header handleTheme={handleTheme} />
        <Screen />
        <Keypad />
      </Wrapper>
    </Container>
  );
};

export default Calculator;
