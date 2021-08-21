import React from "react";
import styled from "styled-components";

const rem = (px) => `${px / 16}rem`;

const ScreenSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* height: calc(8vw + 0.8rem); */
  height: ${rem(128)};
  background-color: ${({ theme }) => theme.screenBg};
  border-radius: ${rem(8)};
  padding: ${rem(36)};
  margin-bottom: ${rem(24)};
`;

const Result = styled.h1`
  color: ${({ theme }) => theme.textScreen};
`;

const Screen = () => {
  return (
    <ScreenSection>
      <Result>399,981</Result>
    </ScreenSection>
  );
};

export default Screen;
