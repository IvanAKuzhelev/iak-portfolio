import * as React from "react";
import { css } from "@emotion/react";
const Hero = () => {
  return (
    <>
      <main
        css={css`
          height: 100vh;
          width: 100vw;
          background-color: #bd93f9;
          display: grid;
          grid-template-columns: 1fr 1fr;
        `}
      >
        <section
          css={css`
            background-color: red;
          `}
        ></section>
        <section
          css={css`
            background-color: green;
          `}
        ></section>
      </main>
    </>
  );
};
export default Hero;
