import styled from "styled-components";

const rem = (px) => `${px / 16}rem`;

export const ScreenSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-height: min(calc(8vw + ${rem(50)}), ${rem(128)});
  background-color: ${({ theme }) => theme.screenBg};
  border-radius: ${rem(8)};
  padding: ${rem(36)};
  margin-bottom: ${rem(24)};
`;

export const Result = styled.h1`
  color: ${({ theme }) => theme.textScreen};
`;
