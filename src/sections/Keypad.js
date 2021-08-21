import React from "react";
import styled from "styled-components";

const rem = (px) => `${px / 16}rem`;

const KeypadSection = styled.div`
  width: 100%;
  height: ${rem(482)};
  background-color: ${({ theme }) => theme.keypadBg};
  padding: ${rem(30)};
  border-radius: ${rem(8)};
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: ${rem(24)};
  grid-template-areas:
    "seven eight nine del"
    "four five six plus"
    "one two three minus"
    "dot zero divde multiply"
    "reset reset equal equal";

  #del,
  #reset {
    color: ${({ theme }) => theme.textKey2};
    background-color: ${({ theme }) => theme.keySecondary};
    box-shadow: 0 4px ${({ theme }) => theme.keySecondaryShadow};
  }

  #del,
  #reset,
  #equal {
    font-size: ${rem(20)};
  }

  #reset {
    grid-area: reset;
  }

  #equal {
    grid-area: equal;
    color: ${({ theme }) => theme.textKey3};
    background-color: ${({ theme }) => theme.keySecondaryVariant};
    box-shadow: 0 4px ${({ theme }) => theme.keySecondaryVariantShadow};
  }
`;
const Key = styled.button`
  font-size: ${rem(28)};
  color: ${({ theme }) => theme.textKey};
  width: 100%;
  height: ${rem(60)};
  border-radius: ${rem(5)};
  border: none;
  background-color: ${({ theme }) => theme.keyPrimary};
  box-shadow: 0 4px ${({ theme }) => theme.keyPrimaryShadow};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

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
