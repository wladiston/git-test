import React from "react";

export default function () {
  return <div>abc</div>;
}

export const getStaticProps = async () => {
  return {
    props: {
      test: "added this stuff",
    },
  };
};
