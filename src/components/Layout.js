import * as React from "react";
import { Global, css } from "@emotion/react";
import scrlArrowUp from "../images/upScrl.svg";
import scrlArrowDown from "../images/downScrl.svg";
import Theme from "./Theme";

const Layout = ({ children }) => {
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
            color: ${Theme.white};
            font-family: "Fira Code", monospace;
            // firefox scrollbar - upcoming standart
            scrollbar-color: #d6deeb #01111d;
          }
          nav > ul {
            list-style: none;
          }
          //to override defaults
          button,
          input,
          select,
          textarea {
            font-family: inherit;
            font-size: inherit;
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
      {children}
    </>
  );
};
export default Layout;
