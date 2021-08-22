import styled from "styled-components";

const rem = (px) => `${px / 16}rem`;

export const KeypadSection = styled.div`
  width: 100%;
  max-height: ${rem(482)};
  background-color: ${({ theme }) => theme.keypadBg};
  padding: ${rem(30)};
  border-radius: ${rem(8)};
`;
export const Container = styled.div`
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

  @media only Screen and (max-width: 620px) {
    gap: calc(0.25rem + 2vw);
  }

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
export const Key = styled.button`
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
