import React, { useState } from "react";
import Header from "components/Calculator/Header";
import Keypad from "components/Calculator/Keypad";
import Screen from "components/Calculator/Screen";
import { theme1, theme2, theme3 } from "globalStyles";
import { Container, Wrapper } from "./CalculatorElements";

const Calculator = ({ setTheme }) => {
  const [screen, setScreen] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [op, setOp] = useState("");

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

  const calculatorOperations = {
    "/": (x, y) => x / y,
    "*": (x, y) => x * y,
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "=": (x, y) => y,
  };

  const performOperation = () => {
    let temp = calculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(screen)
    );
    setOp("");
    setPrevValue("");
    setScreen(String(temp));
  };

  const handleNum = (number) =>
    setScreen(screen === "0" ? number : screen + number);

  const handleDot = () => {
    if (!/\./.test(screen)) {
      setScreen(screen + ".");
    }
  };

  const handleReset = () => {
    setScreen("0");
    setOp("");
    setPrevValue("");
  };

  const handleDel = () => {
    if (screen) setScreen(screen.slice(0, -1));
  };

  const handleOperator = (value) => {
    setOp(value);

    if (op === "") {
      setPrevValue(screen);
      setScreen("");
    } else if (prevValue && op && screen) {
      performOperation();
    }
    // console.log(`prev=${prevValue}, op=${op}, screen=${screen}`);
  };

  return (
    <Container>
      <Wrapper>
        <Header handleTheme={handleTheme} />
        <Screen screen={screen} />
        <Keypad
          handleNum={handleNum}
          handleDot={handleDot}
          handleReset={handleReset}
          handleDel={handleDel}
          handleOperator={handleOperator}
        />
      </Wrapper>
    </Container>
  );
};

export default Calculator;
