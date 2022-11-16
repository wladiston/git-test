import React from "react";
import { Timer } from "./timer";

const realEnv = (x) => {
  switch (x) {
    case "app.swanbitcoin.com":
    case "app.prod.swanbitcoin.com":
      return "production";
    case "app.qa.swanbitcoin.com":
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
