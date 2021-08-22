import React, { useState } from "react";
import {
  HeaderSection,
  Logo,
  ThemeContainer,
  Title,
  ToggleBackground,
  ToggleButton,
  ToggleSwitch,
  Wrapper,
} from "./HeaderElements";

const Header = ({ handleTheme }) => {
  const [checked, setChecked] = useState(1);

  const handleRadio = (e) => {
    const value = parseInt(e.target.value, 10);
    setChecked(value);
    handleTheme(value);
  };

  return (
    <HeaderSection>
      <Logo>calc</Logo>
      <ThemeContainer>
        <Title>THEME</Title>
        <ToggleSwitch aria-label="theme toggle" role="radiogroup">
          <label htmlFor="theme1">1</label>
          <label htmlFor="theme2">2</label>
          <label htmlFor="theme3">3</label>
          <Wrapper>
            <input
              type="radio"
              name="theme"
              id="theme1"
              value="1"
              onChange={handleRadio}
              checked={checked === 1}
            />
            <input
              type="radio"
              name="theme"
              id="theme2"
              value="2"
              onChange={handleRadio}
              checked={checked === 2}
            />
            <input
              type="radio"
              name="theme"
              id="theme3"
              value="3"
              onChange={handleRadio}
              checked={checked === 3}
            />
            <ToggleBackground aria-hidden="true"></ToggleBackground>
            <ToggleButton aria-hidden="true"></ToggleButton>
          </Wrapper>
        </ToggleSwitch>
      </ThemeContainer>
    </HeaderSection>
  );
};

export default Header;
