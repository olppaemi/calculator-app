import React from "react";
import { Container, Key, KeypadSection } from "./KeypadElements";

const Keypad = () => {
  return (
    <KeypadSection>
      <Container>
        <Key id="seven">7</Key>
        <Key id="eight">8</Key>
        <Key id="nine">9</Key>
        <Key id="del">DEL</Key>
        <Key id="four">4</Key>
        <Key id="five">5</Key>
        <Key id="six">6</Key>
        <Key id="plus">+</Key>
        <Key id="one">1</Key>
        <Key id="two">2</Key>
        <Key id="three">3</Key>
        <Key id="minus">-</Key>
        <Key id="dot">.</Key>
        <Key id="zero">0</Key>
        <Key id="divde">/</Key>
        <Key id="multiply">x</Key>
        <Key id="reset">RESET</Key>
        <Key id="equal">=</Key>
      </Container>
    </KeypadSection>
  );
};

export default Keypad;
