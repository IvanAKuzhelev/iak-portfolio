import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import Theme from "./Theme";
import ProjectsData from "./ProjectsData";
import GatsbyIcon from "../images/dev-icons/gatsby.svg";
import ProjectCard from "./ProjectCard";

const Projects = ({ scrollTarget }) => {
  const [displayRequest, setDisplayRequest] = useState("featured");
  return (
    <section
      ref={scrollTarget}
      css={css`
        /* display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column; */
        display: grid;
        row-gap: 5vh;
        grid-template-columns: 10% 1fr;
        background-color: ${Theme.bg};
        width: 100vw;
        max-width: 100%;
        height: 100vh;
      `}
    >
      <div
        css={css`
          background-color: white;
          height: 100%;
        `}
      ></div>
      {ProjectsData.flatMap((project) =>
        project.sortLabels.includes(displayRequest)
          ? [<ProjectCard project={project} key={project.name} />]
          : []
      )}
    </section>
  );
};
export default Projects;
