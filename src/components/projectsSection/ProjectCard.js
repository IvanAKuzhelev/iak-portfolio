import * as React from "react";
import { css } from "@emotion/react";
import { useState } from "react";
import styled from "@emotion/styled";
import Theme from "../Theme";
import ProjectLink from "./ProjectLink";

const ProjectCard = ({ project }) => {
  const { name, img, description, features, stack } = project;
  const [displayed, setDisplayed] = useState("Description");
  const tabButtonShift = 50;
  const CardButton = styled.button`
    all: unset;
    position: absolute;
    top: -18px;
    background-color: white;
    height: 20px;
    width: 80px;

    font-size: 0.7rem;
    text-align: center;

    right: ${({ position }) => 5 + 85 * Number(position)}px;
    clip-path: polygon(
      0% 4px,
      4px 0%,
      calc(100% - 4px) 0%,
      100% 4px,
      100% calc(100% - 4px),
      100% 100%,
      0 100%
    );
    ${({ children }) => (children === displayed ? "" : "opacity: 0.94;")};

    &:focus {
      outline-offset: -6px;
      outline: 3px solid ${Theme.bg};
    }
    @media (min-width: 900px) {
      box-sizing: border-box;
      position: absolute;
      font-size: inherit;
      background-color: white;
      width: 160px;

      top: ${-0.94 * tabButtonShift}px;
      right: ${({ position }) => 10 + 180 * Number(position)}px;
      height: ${tabButtonShift}px;
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
        outline-offset: -6px;
        outline: 3px solid ${Theme.bg};
      }
    }
  `;
  const Content = () => {
    switch (displayed) {
      case "Description":
        return (
          <p
            css={css`
              grid-area: content;
              align-self: start;
            `}
          >
            {description}
          </p>
        );
      case "Features":
        return (
          <ul
            css={css`
              grid-area: content;
              align-self: start;
            `}
          >
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        );
      case "Stack":
        return (
          <ul
            css={css`
              grid-area: content;
              align-self: start;
            `}
          >
            {stack.map((stackItem) => (
              <li key={stackItem.text}>{stackItem.text}</li>
            ))}
          </ul>
        );
      default:
        console.log("Something is happening");
        return (
          <p
            css={css`
              grid-area: content;
              align-self: start;
              text-align: justify;
            `}
          >
            {description}
          </p>
        );
    }
  };
  return (
    <>
      <section
        css={css`
          position: relative;
          justify-self: center;
          background-color: ${Theme.white};
          color: ${Theme.bg};
          border-radius: 8px;
          grid-column: 2/3;
          width: 95%;
          margin-top: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto auto auto auto;
          grid-template-areas:
            "image image image"
            "title title title"
            "content content content"
            "live blog github";
          @media (min-width: 900px) {
            margin-top: ${1.06 * tabButtonShift}px;
            height: 30vh;
            min-height: 200px;
            grid-template-columns: minmax(35%, auto) 1fr 5%;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas:
              "image title blog"
              "image content live"
              "image content github";
            align-items: center;
          }
        `}
      >
        <CardButton position="2" onClick={() => setDisplayed("Description")}>
          Description
        </CardButton>
        <CardButton position="1" onClick={() => setDisplayed("Features")}>
          Features
        </CardButton>
        <CardButton position="0" onClick={() => setDisplayed("Stack")}>
          Stack
        </CardButton>
        <img
          src={img.src}
          alt={img.alt}
          title={img.title}
          css={css`
            @media (min-width: 900px) {
              height: 85%;
              width: auto;
            }
            margin: 5px;
            width: 85%;
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
        <ProjectLink linkType="blog" project={project} />
        <ProjectLink linkType="live" project={project} />
        <ProjectLink linkType="github" project={project} />
      </section>
    </>
  );
};
export default ProjectCard;
