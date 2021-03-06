import styled from "styled-components";

const rem = (px) => `${px / 16}rem`;

export const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textHeader};
`;
export const Logo = styled.h1`
  font-size: ${rem(24)};
`;

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.span`
  margin-right: ${rem(20)};
`;

export const ToggleSwitch = styled.fieldset`
  width: ${rem(72)};
  height: ${rem(52)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  border: none;
  margin: 0;
  padding: 0;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    &[for="theme1"] {
      grid-column: 1 / 2;
    }
    &[for="theme2"] {
      grid-column: 2 / 3;
    }
    &[for="theme3"] {
      grid-column: 3 / 4;
    }
  }
`;

export const ToggleButton = styled.span`
  position: absolute;
  top: ${rem(4)};
  left: ${rem(4)};
  background-color: ${({ theme }) => theme.keySecondaryVariant};
  border-radius: 50%;
  width: ${rem(18)};
  height: ${rem(18)};
  transition: all 150ms ease-in-out;
`;

export const Wrapper = styled.div`
  position: relative;
  grid-column: 1 / 4;
  height: ${rem(26)};

  input[type="radio"] {
    /* opacity: 0; */

    width: 1rem;
    height: 1rem;
  }

  #theme2:checked ~ ${ToggleButton} {
    transform: translateX(24px);
  }

  #theme3:checked ~ ${ToggleButton} {
    transform: translateX(48px);
  }
`;
export const ToggleBackground = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.keypadBg};
  border-radius: 0.8rem;
  pointer-events: none; // important
`;
