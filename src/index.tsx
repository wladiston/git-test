import React from "react";
import { Timer } from "./timer";

const realEnv = (x: $TSFixMe) => {
  switch (x) {
    case "app.bitcoin.com":
    case "app.prod.bitcoin.com":
      return "production";
    case "app.qa.bitcoin.com":
      return "qa";
    default:
      return "dev";
  }
};

export const Index = () => {
  return (
    <div>
      <Timer time={"123"} />
    </div>
  );
};
