import * as React from "react";
import { css, keyframes } from "@emotion/react";

import arrow from "../images/arrow.svg";
const ScrollCTA = (props) => {
  const {
    scrollTarget,
    size = 1,
    message = "Learn more",
    period = 3,
    //position + extra
    extStyles = `       
    position: absolute;
        bottom: 2vh;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;`,
  } = props;
  const bouncing = keyframes`
        0%   { transform:  translateY(0); } 
        ${(100 * 0.15) / period}%  { transform:  translateY(0); }
        ${(100 * 0.45) / period}%  { transform:  translateY(-20%); }
        ${(100 * 0.75) / period}%  { transform:  translateY(0); }
        ${(100 * 0.855) / period}%  { transform:  translateY(-2%); }
        ${(100 * 0.96) / period}%  { transform:  translateY(0); }
        //delay between animations
        100% { transform: translateY(0); }`;
  return (
    <button
      onClick={() =>
        scrollTarget.current.scrollIntoView({ behavior: "smooth" })
      }
      css={css`
        all: unset;
        -webkit-text-fill-color: inherit;
        background-color: transparent;
        font-size: ${size * 1.2}rem;
        ${extStyles}
        &::after {
          content: "";
          display: block;
          height: ${size * 6}vh;
          margin-top: ${size * 1.2}vh;
          background-repeat: no-repeat;
          background-image: url(${arrow});
          background-position: center;
          animation: ${bouncing} ${period}s ease infinite;
        }
      `}
    >
      {message}
    </button>
  );
};
export default ScrollCTA;
