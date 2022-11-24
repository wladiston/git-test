import React from "react";

const realEnv = (x: $TSFixMe) => {
  switch (x) {
    case "app.com":
    case "app.prod.com":
      return "production";
    case "app.qa.com":
      return "qa";
    default:
      return "dev";
  }
};

export const Index = () => {
  return <div>index</div>;
};
