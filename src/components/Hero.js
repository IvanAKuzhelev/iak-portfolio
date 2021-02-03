import * as React from "react";
import { css } from "@emotion/react";
import TechVisuals from "./TechVisuals";
const Hero = () => {
  return (
    <>
      <main
        css={css`
          height: 100vh;
          width: 100vw;
          background-color: #011627;
          /* background-color: #44475a; */
          display: grid;
          grid-template-columns: 1fr 1fr;
        `}
      >
        <TechVisuals />
        <section
          css={css`
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <h1
            css={css`
              font-size: 4rem;
              color: white;
              text-align: center;
            `}
          >
            A <br /> Javascript
            <br /> developer
            <br /> for your
            <br /> needs
          </h1>
        </section>
      </main>
    </>
  );
};
export default Hero;
