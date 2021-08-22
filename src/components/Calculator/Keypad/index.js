import React from "react";
import { Container, Key, KeypadSection } from "./KeypadElements";

const Keypad = ({
  handleNum,
  handleDot,
  handleReset,
  handleDel,
  handleOperator,
}) => {
  return (
    <KeypadSection>
      <Container>
        <Key id="seven" onClick={() => handleNum("7")}>
          7
        </Key>
        <Key id="eight" onClick={() => handleNum("8")}>
          8
        </Key>
        <Key id="nine" onClick={() => handleNum("9")}>
          9
        </Key>
        <Key id="del" onClick={handleDel}>
          DEL
        </Key>
        <Key id="four" onClick={() => handleNum("4")}>
          4
        </Key>
        <Key id="five" onClick={() => handleNum("5")}>
          5
        </Key>
        <Key id="six" onClick={() => handleNum("6")}>
          6
        </Key>
        <Key id="plus" onClick={() => handleOperator("+")}>
          +
        </Key>
        <Key id="one" onClick={() => handleNum("1")}>
          1
        </Key>
        <Key id="two" onClick={() => handleNum("2")}>
          2
        </Key>
        <Key id="three" onClick={() => handleNum("3")}>
          3
        </Key>
        <Key id="minus" onClick={() => handleOperator("-")}>
          -
        </Key>
        <Key id="dot" onClick={handleDot}>
          .
        </Key>
        <Key id="zero" onClick={() => handleNum("0")}>
          0
        </Key>
        <Key id="divde" onClick={() => handleOperator("/")}>
          /
        </Key>
        <Key id="multiply" onClick={() => handleOperator("*")}>
          x
        </Key>
        <Key id="reset" onClick={handleReset}>
          RESET
        </Key>
        <Key id="equal" onClick={() => handleOperator("=")}>
          =
        </Key>
      </Container>
    </KeypadSection>
  );
};

export default Keypad;
