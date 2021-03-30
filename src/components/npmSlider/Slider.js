import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import SLIDER_DATA from "./SLIDER_DATA";
import Theme from "../Theme";

const Slider = () => {
  const [counter, setCounter] = useState(0);
  const timerID = useRef(null);
  const Wrapper = styled.div`
    grid-column: 2/-3;
    width: 100%;
    height: 2.4rem;
    background-color: lightgray;
    color: ${Theme.bg};
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.4vh;
  `;

  useEffect(() => {
    timerID.current = setTimeout(() => setCounter(counter + 1), 1000);
    return () => clearTimeout(timerID.current);
  }, [counter]);
  return (
    <Wrapper
      onMouseEnter={() => clearTimeout(timerID.current)}
      onMouseLeave={() =>
        (timerID.current = setTimeout(() => setCounter(counter + 1), 1000))
      }
    >
      <p>{SLIDER_DATA[counter % SLIDER_DATA.length]}</p>
    </Wrapper>
  );
};
export default Slider;
