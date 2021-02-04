import * as React from "react";
import Hero from "../components/Hero";
import { Global, css } from "@emotion/react";
import Header from "../components/Header";

const IndexPage = () => {
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
      <Hero />
    </>
  );
};

export default IndexPage;
