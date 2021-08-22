import React from "react";
import { Result, ScreenSection } from "./ScreenElements";

const Screen = ({ screen }) => {
  return (
    <ScreenSection>
      <Result>{screen ? screen : "0"}</Result>
    </ScreenSection>
  );
};

export default Screen;
