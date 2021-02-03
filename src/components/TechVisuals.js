import * as React from "react";
import { css } from "@emotion/react";
import JSIcon from "../images/dev-icons/javascript-original.svg";

const TechVisuals = () => {
  return (
    <section
      css={css`
        background-color: transparent;
        padding: 2rem;
      `}
    >
      <img
        src={JSIcon}
        alt="ES6 and beyond"
        css={css`
          height: 30vh;
        `}
      />
    </section>
  );
};
export default TechVisuals;
