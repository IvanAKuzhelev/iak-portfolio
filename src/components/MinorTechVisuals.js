import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import GatsbyIcon from "../images/dev-icons/gatsby.svg";
import NodeIcon from "../images/dev-icons/nodejs.svg";
import ExpressIcon from "../images/dev-icons/express.svg";
import GitIcon from "../images/dev-icons/git.svg";

const MinorTechVisuals = () => {
  const FlexedIcon = styled.img`
    margin-right: 1vh;
    height: 14.5vh;
  `;
  return (
    //Flexboxed for future-proofing for the ease of adding new icons including the non-squared ones
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        margin-top: 2vh;
        grid-row: 3/4;
        grid-column: 1/4;
      `}
    >
      <FlexedIcon src={GatsbyIcon} alt="Gatsby" title="Gatsby" />
      <FlexedIcon src={NodeIcon} alt="Node.js" title="Node.js" />
      <FlexedIcon src={ExpressIcon} alt="Express" title="Express" />
      <FlexedIcon src={GitIcon} alt="Git" title="Git" />
    </div>
  );
};
export default MinorTechVisuals;
