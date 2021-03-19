import * as React from "react";
import { css } from "@emotion/react";

import ScrollCTA from "./ScrollCTA";
import JSIcon from "../images/dev-icons/javascript.svg";
import TSIcon from "../images/dev-icons/typescript.svg";
import ReactIcon from "../images/dev-icons/react.svg";

import MinorTechVisuals from "./MinorTechVisuals";

const Hero = ({ scrollTarget }) => {
  return (
    <>
      <main
        css={css`
          height: 100vh;
          width: 100vw;
          max-width: 100%;
          background-color: #011627;
          display: grid;
          padding: 10.5vh 3vw 0;
          grid-template-columns: 30vh auto 1fr 50%;
          grid-template-rows: 14.5vh 14.5vh auto 1fr;
          grid-gap: 1vh;
          background: rgb(1, 22, 39);
          background: linear-gradient(
            280deg,
            rgba(1, 22, 39, 1) 47%,
            rgba(246, 246, 246, 0.05) 49%,
            rgba(1, 22, 39, 1) 51%
          );
        `}
      >
        <img
          src={JSIcon}
          alt="ES6 and beyond"
          title="ES6 and beyond"
          css={css`
            height: 30vh;
            grid-row: 1/3;
          `}
        />
        <img
          src={TSIcon}
          alt="TypeScript"
          title="TypeScript"
          css={css`
            height: 14.5vh;
          `}
        />
        <img
          src={ReactIcon}
          alt="React"
          title="React"
          css={css`
            height: 14.5vh;
            grid-row: 2/3;
          `}
        />
        <MinorTechVisuals />
        <h1
          css={css`
            font-size: 4rem;
            text-align: center;
            grid-column: -2/-1;
            grid-row: 1/-1;
            align-self: center;
            padding-bottom: 15vh;
          `}
        >
          A <br /> Javascript
          <br /> developer
          <br /> for your
          <br /> needs
        </h1>
        <ScrollCTA scrollTarget={scrollTarget} message="See my projects" />
      </main>
    </>
  );
};
export default Hero;
