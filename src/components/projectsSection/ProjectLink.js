import React from "react";
import { css } from "@emotion/react";
import githubIcon from "../../images/dev-icons/github.svg";
import liveIcon from "../../images/live.svg";
import blogIcon from "../../images/blog.svg";

const ProjectLink = ({ linkType, project }) => {
  const ICONS = {
    github: {
      src: githubIcon,
      alt: "GitHub",
      title: "GitHub",
    },
    live: {
      src: liveIcon,
      alt: "web",
      title: "Live version",
    },
    blog: {
      src: blogIcon,
      alt: "text",
      title: "Blog article",
    },
  };
  if (!(linkType in project)) {
    return null;
  }
  return (
    <a
      css={css`
        grid-area: ${linkType};
      `}
      href={project[linkType]}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={ICONS[linkType].src}
        alt={ICONS[linkType].alt}
        title={ICONS[linkType].title}
        css={css`
          max-height: 4rem;
        `}
      />
    </a>
  );
};
export default ProjectLink;
