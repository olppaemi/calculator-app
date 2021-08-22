import React from "react";
import { Result, ScreenSection } from "./ScreenElements";

const Screen = ({ screen }) => {
  return (
    <ScreenSection>
      <Result>
        {screen ? screen.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : "0"}
      </Result>
    </ScreenSection>
  );
};

export default Screen;
