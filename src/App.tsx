import React from "react";

const realEnv = (x: $TSFixMe) => {
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
  return <div>index</div>;
};
