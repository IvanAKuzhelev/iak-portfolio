import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/react";

import Theme from "../Theme";
import PROJECTS_DATA from "./PROJECTS_DATA";
import { SORT_LABELS } from "./PROJECTS_DATA";
import ProjectCard from "./ProjectCard";

import SortingPanel from "./SortingPanel";

const Projects = ({ scrollTarget }) => {
  const [displayRequest, setDisplayRequest] = useState(SORT_LABELS.featured);

  const prjs = PROJECTS_DATA.flatMap((project) =>
    project.sortLabels.includes(displayRequest)
      ? [<ProjectCard project={project} key={project.name} />]
      : []
  );
  return (
    <section
      ref={scrollTarget}
      css={css`
        display: grid;
        row-gap: 5vh;
        grid-template-columns: 10% 1fr;
        align-items: center;
        background-color: ${Theme.bg};
        width: 100vw;
        max-width: 100%;
        padding-left: 1vw;
      `}
    >
      <SortingPanel
        panelHeight={String(prjs.length + 1)}
        displayRequest={displayRequest}
        setDisplayRequest={setDisplayRequest}
      />
      {prjs}
    </section>
  );
};
export default Projects;
