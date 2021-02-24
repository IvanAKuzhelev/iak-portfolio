import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import JSIcon from "../images/dev-icons/javascript.svg";
import TSIcon from "../images/dev-icons/typescript.svg";
import ReactIcon from "../images/dev-icons/react.svg";
import GatsbyIcon from "../images/dev-icons/gatsby.svg";
import NodeIcon from "../images/dev-icons/nodejs.svg";
import ExpressIcon from "../images/dev-icons/express.svg";
import GitIcon from "../images/dev-icons/git.svg";

import NPMIcon from "../images/dev-icons/npm.svg";

const TechVisuals = () => {
  const FlexedIcon = styled.img`
    margin-right: 2vw;
    height: 14.5vh;
    padding-top: 2vh;
  `;
  return (
    <section
      css={css`
        background-color: transparent;
        padding: 2rem;
        display: grid;
        grid-template-columns: 30vh auto auto;
        grid-template-rows: 14.5vh 14.5vh auto;
        grid-gap: 1vh;
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
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          grid-row: 3/4;
          grid-column: 1/4;
        `}
      >
        <FlexedIcon src={GatsbyIcon} alt="Gatsby" title="Gatsby" />
        <FlexedIcon src={NodeIcon} alt="Node.js" title="Node.js" />
        <FlexedIcon src={ExpressIcon} alt="Express" title="Express" />
        <FlexedIcon src={GitIcon} alt="Git" title="Git" />
      </div>
    </section>
  );
};
export default TechVisuals;
