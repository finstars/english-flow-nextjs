"use client"

import React from "react";
import { useDetectAdBlock } from "adblock-detect-react";

const SomeFunctionalComponent = () => {
  const adBlockDetected = useDetectAdBlock();

  React.useEffect(() => {
    if (adBlockDetected) {
      window.alert("ad block detected");
    }
  }, []);

  return <div>{adBlockDetected && "Hello Ad Blocked Page"}</div>;
};