import * as React from "react";
import { css } from "@emotion/react";
import { useState } from "react";
import styled from "@emotion/styled";
import Theme from "./Theme";

const ProjectCard = ({ project }) => {
  const { name, img, description, features, stack } = project;
  const [displayed, setDisplayed] = useState("desc");
  const CardButton = styled.button`
    all: unset;
    box-sizing: border-box;
    width: 10vw;
    background-color: white;
    position: absolute;
    top: -6vh;
    right: ${(props) => 10 + 80 * Number(props.position)}px;
    height: 6vh;
    border: solid 2px blue;
    clip-path: polygon(
      0% 20px,
      20px 0%,
      calc(100% - 20px) 0%,
      100% 20px,
      100% calc(100% - 20px),
      100% 100%,
      0 100%
    );
    &:focus {
      box-shadow: 0 0 10px magenta;
    }
  `;
  const Content = () => {
    switch (displayed) {
      case "desc":
        return (
          <p
            css={css`
              grid-area: content;
            `}
          >
            {description}
          </p>
        );
      case "feat":
        return (
          <ul
            css={css`
              grid-area: content;
            `}
          >
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        );
      case "stack":
        return (
          <ul
            css={css`
              grid-area: content;
            `}
          >
            {stack.map((stackItem) => (
              <li key={stackItem.text}>{stackItem.text}</li>
            ))}
          </ul>
        );
    }
  };
  return (
    <>
      <div
        css={css`
          position: relative;
          background-color: ${Theme.white};
          grid-column: 2/3;
          justify-self: center;
          width: 85%;
          height: 30vh;
          min-height: 200px;
          border-radius: 8px;
          color: ${Theme.bg};
          display: grid;
          grid-template-columns: 20% 1fr 5%;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-areas:
            "image title blog"
            "image content live"
            "image content github";
          align-items: center;
        `}
      >
        <CardButton position="2" onClick={() => setDisplayed("desc")}>
          Description
        </CardButton>
        <CardButton position="1" onClick={() => setDisplayed("feat")}>
          Features
        </CardButton>
        <CardButton position="0" onClick={() => setDisplayed("stack")}>
          Stack
        </CardButton>
        <img
          src={img.src}
          alt={img.alt}
          title={img.title}
          css={css`
            height: 85%;
            grid-area: image;
            justify-self: center;
          `}
        />
        <h2
          css={css`
            grid-area: title;
          `}
        >
          {name}
        </h2>
        <Content />
      </div>
    </>
  );
};
export default ProjectCard;
