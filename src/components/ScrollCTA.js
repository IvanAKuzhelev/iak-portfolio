import * as React from "react";
import { useRef } from "react";
import { css, keyframes } from "@emotion/react";

import arrow from "../images/arrow.svg";
const ScrollCTA = (props) => {
  const { scrollTarget, size = 1, message = "Learn more", period = 3 } = props;
  const bouncing = keyframes`
        0%   { transform:  translateY(0); } 
        ${(100 * 0.15) / period}%  { transform:  translateY(0); }
        ${(100 * 0.45) / period}%  { transform:  translateY(-20%); }
        ${(100 * 0.75) / period}%  { transform:  translateY(0); }
        ${(100 * 0.855) / period}%  { transform:  translateY(-2%); }
        ${(100 * 0.96) / period}%  { transform:  translateY(0); }
        //delay between animations
        100% { transform: translateY(0); }`;
  const btn = useRef(null);
  return (
    <button
      ref={btn}
      onClick={() => {
        scrollTarget.current.scrollIntoView({ behavior: "smooth" });
        btn.current.blur();
      }}
      css={css`
        all: unset;
        -webkit-text-fill-color: inherit;
        background-color: transparent;
        font-size: ${size * 1.2}rem;
        grid-column: 1/-1;
        &:focus {
          outline: white solid 3px;
        }
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
