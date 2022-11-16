// @ts-expect-error TS(2307): Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
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
  // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  return <div>index</div>;
};
