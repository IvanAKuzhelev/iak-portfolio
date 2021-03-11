import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import Theme from "./Theme";
import ProjectsData from "./ProjectsData";
import GatsbyIcon from "../images/dev-icons/gatsby.svg";

const Projects = ({ scrollTarget }) => {
  const [displayRequest, setDisplayRequest] = useState("featured");
  return (
    <section
      ref={scrollTarget}
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column;
        background-color: ${Theme.bg};
        width: 100vw;
        height: 100vh;
        max-width: 100%;
      `}
    >
      <div
        css={css`
          background-color: white;
          height: 100%;
          width: 10%;
        `}
      ></div>
      {ProjectsData.flatMap((project) =>
        project.sortLabels.includes(displayRequest)
          ? [<p key={project.name}>{project.name}</p>]
          : []
      )}
    </section>
  );
};
export default Projects;
