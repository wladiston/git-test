import React from "react";

export default function () {
  return <div>abc</div>;
}

// add a random function
export function random() {
  return Math.random();
}

export const getStaticProps = async () => {
  return {
    props: {
      test: "added this stuff",
    },
  };
};
