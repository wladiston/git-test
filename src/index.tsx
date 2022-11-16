import React from "react";

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
  return <div>index</div>;
};
