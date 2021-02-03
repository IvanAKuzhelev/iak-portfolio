import * as React from "react";
import Hero from "../components/Hero";
import { Global, css } from "@emotion/react";

const IndexPage = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
          }

          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        `}
      />
      <Hero />
    </>
  );
};

export default IndexPage;
