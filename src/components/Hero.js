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
import Slider from "./npmSlider/Slider";
import npmIcon from "../images/dev-icons/npm.svg";

const Hero = ({ scrollTarget }) => {
  const MinorIcon = styled.img`
    display: none;
    @media (min-width: 900px) {
      display: block;
      height: 14.5vh;
    }
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
          grid-template-columns: auto 1fr;
          place-items: center center;
          grid-template-rows: 2fr 1fr 15vh;

          place-content: center center;
          padding: 15vh 5px 0 0;
          @media (min-width: 900px) {
            padding: 10.5vh 3vw 0;
            grid-template-columns: 14.5vh 14.5vh auto auto 1fr 50%;
            grid-template-rows: 14.5vh 14.5vh auto auto 1fr auto;
            grid-gap: 1vh;
            background: rgb(1, 22, 39);
            background: linear-gradient(
              280deg,
              rgba(1, 22, 39, 1) 47%,
              rgba(246, 246, 246, 0.05) 49%,
              rgba(1, 22, 39, 1) 51%
            );
          }
          @media (min-width: 1600px) {
            grid-gap: 1.7vh;
          }
        `}
      >
        <img
          src={JSIcon}
          alt="JS"
          title="ES6 and beyond"
          css={css`
            display: none;
            @media (min-width: 900px) {
              display: block;
            }
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
        <img
          src={npmIcon}
          alt="npm"
          title="npm"
          css={css`
            width: 15vw;
            @media (min-width: 900px) {
              grid-column-start: 1;
              width: 14.5vh;
            }
          `}
        />
        <Slider />
        <h1
          css={css`
            font-size: 3rem;
            text-align: center;
            grid-column: 1/-1;
            grid-row: 1/2;
            align-self: center;
            @media (min-width: 900px) {
              grid-column: -2/-1;
              grid-row: 1/-1;
              font-size: 4rem;
              padding-bottom: 15vh;
            }
          `}
        >
          A <br /> software
          <br /> developer
          <br /> for your
          <br /> needs
        </h1>
        <ScrollCTA scrollTarget={scrollTarget} message="Hit me up!" />
      </main>
    </>
  );
};
export default Hero;
