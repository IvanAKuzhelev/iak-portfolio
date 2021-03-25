import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ScrollCTA from "./ScrollCTA";
import JSIcon from "../images/dev-icons/javascript.svg";
import TSIcon from "../images/dev-icons/typescript.svg";
import ReactIcon from "../images/dev-icons/react.svg";
import GatsbyIcon from "../images/dev-icons/gatsby.svg";
import NodeIcon from "../images/dev-icons/nodejs.svg";
import ExpressIcon from "../images/dev-icons/express.svg";
import GitIcon from "../images/dev-icons/git.svg";
import Slider from "./npmSlider/slider";
import npmIcon from "../images/dev-icons/npm.svg";

const Hero = ({ scrollTarget }) => {
  const MinorIcon = styled.img`
    height: 14.5vh;
    ${(props) =>
      props.hardPlacement ? `grid-area: ${props.hardPlacement};` : ""}
  `;
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
          grid-template-columns: 14.5vh 14.5vh auto auto 1fr 50%;
          grid-template-rows: 14.5vh 14.5vh auto auto 1fr;
          grid-gap: 1vh;
          place-items: center center;
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
          alt="JS"
          title="ES6 and beyond"
          css={css`
            height: 30vh;
            grid-area: 1/1/3/3;
          `}
        />
        <MinorIcon src={TSIcon} alt="TypeScript" title="TypeScript" />
        <MinorIcon
          src={ReactIcon}
          alt="React"
          title="React"
          css={css`
            grid-row-start: 2;
          `}
        />
        <MinorIcon
          src={GatsbyIcon}
          alt="Gatsby"
          title="Gatsby"
          css={css`
            grid-column-start: 1;
          `}
        />
        <MinorIcon src={NodeIcon} alt="Node.js" title="Node.js" />
        <MinorIcon src={ExpressIcon} alt="Express" title="Express" />
        <MinorIcon src={GitIcon} alt="Git" title="Git" />
        <MinorIcon
          src={npmIcon}
          alt="npm"
          title="npm"
          css={css`
            grid-column-start: 1;
          `}
        />
        <Slider />
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
