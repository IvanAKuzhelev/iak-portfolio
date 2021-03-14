import * as React from "react";
import { css } from "@emotion/react";
import { useState } from "react";
import styled from "@emotion/styled";

const ProjectCard = ({ project }) => {
  const { name, img, description, features, stack } = project;
  const [displayed, setDisplayed] = useState("desc");
  const CardButton = styled.button`
    position: absolute;
    top: -20px;
    right: ${(props) => 10 + 80 * Number(props.position)}px;
    height: 20px;
  `;
  const Content = () => {
    switch (displayed) {
      case "desc":
        return (
          <>
            <p
              css={css`
                width: 70%;
              `}
            >
              {description}
            </p>
          </>
        );
      case "feat":
        return (
          <>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </>
        );
      case "stack":
        return (
          <>
            <ul>
              {stack.map((stackItem) => (
                <li key={stackItem}>{stackItem}</li>
              ))}
            </ul>
          </>
        );
    }
  };
  return (
    <>
      <div
        css={css`
          position: relative;
          background-color: white;
          width: 85%;
          height: 30%;
          display: flex;
          color: black;
          flex-wrap: wrap;
        `}
      >
        <CardButton position="0" onClick={() => setDisplayed("desc")}>
          Description
        </CardButton>
        <CardButton position="1" onClick={() => setDisplayed("feat")}>
          Features
        </CardButton>
        <CardButton position="2" onClick={() => setDisplayed("stack")}>
          Stack
        </CardButton>
        <img
          src={img.src}
          alt={img.alt}
          title={img.title}
          css={css`
            height: 80%;
          `}
        />
        <h1>{name}</h1>
        <Content />
      </div>
    </>
  );
};
export default ProjectCard;
