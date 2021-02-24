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
          display: grid;
          padding-top: 10vh;
          grid-template-columns: 1fr 1fr;
          background: rgb(1, 22, 39);
          background: linear-gradient(
            280deg,
            rgba(1, 22, 39, 1) 47%,
            rgba(246, 246, 246, 0.05) 49%,
            rgba(1, 22, 39, 1) 51%
          );
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
