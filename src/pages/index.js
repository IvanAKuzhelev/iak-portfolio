import * as React from "react";
import { useRef } from "react";
import Hero from "../components/Hero";
import { Global, css } from "@emotion/react";
import Header from "../components/Header";
import scrlArrowUp from "../images/eject-white-18dp.svg";
import scrlArrowDown from "../images/eject-white-18dp.svg";

const IndexPage = () => {
  const scrollTarget = useRef(null);
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            background-color: #011627;
            color: white;
            scrollbar-color: #d6deeb #01111d;
          }
          nav > ul {
            list-style: none;
          }
          // Chromium custom scrollbar
          body::-webkit-scrollbar {
            background-color: #01111d;
          }
          body::-webkit-scrollbar-thumb:active {
            background-color: #b7bec9;
          }
          body::-webkit-scrollbar-button:vertical:increment {
            background-color: #010b12;
            background-image: url(${scrlArrowDown});
          }
          body::-webkit-scrollbar-button:vertical:decrement {
            background-color: #010b12;
            background-image: url(${scrlArrowUp});
          }
          body::-webkit-scrollbar-button:active {
            background-color: #010a12;
          }
          body::-webkit-scrollbar-thumb {
            background-color: #d6deeb;
          }
        `}
      />
      <Header />
      <Hero scrollTarget={scrollTarget} />
      <section
        ref={scrollTarget}
        css={css`
          background-color: black;
          width: 100vw;
          height: 100vh;
          max-width: 100%;
        `}
      >
        Content
      </section>
    </>
  );
};

export default IndexPage;
