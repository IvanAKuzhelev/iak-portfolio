import * as React from "react";
import { useRef } from "react";
import Hero from "../components/Hero";
import { Global, css } from "@emotion/react";
import Header from "../components/Header";

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
          }
          nav > ul {
            list-style: none;
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
