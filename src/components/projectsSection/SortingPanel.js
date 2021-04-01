import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { SORT_LABELS } from "./PROJECTS_DATA";

import JSIcon from "../../images/dev-icons/javascript.svg";
import TSIcon from "../../images/dev-icons/typescript.svg";
import ReactIcon from "../../images/dev-icons/react.svg";
import NodeIcon from "../../images/dev-icons/nodejs.svg";
import ThreeD from "../../images/3d.svg";
import Star from "../../images/star.svg";
import Theme from "../Theme";

const SortingPanel = ({ panelHeight, displayRequest, setDisplayRequest }) => {
  const SortButton = (props) => {
    const stateDepStyle = (props) =>
      props.payload === displayRequest
        ? css``
        : css`
            transform: scale(0.85);
            filter: grayscale(0.18);
          `;
    return (
      <button
        css={css`
          all: unset;
          cursor: pointer;
          ${stateDepStyle(props)}
          &:hover {
            transform: scale(1);
            filter: grayscale(0);
          }
          &:focus {
            outline: ${Theme.white} solid 3px;
          }
        `}
        onClick={() => {
          setDisplayRequest(props.payload);
        }}
      >
        {props.children}
      </button>
    );
  };

  const SortImage = styled.img`
    width: 14vw;
    @media (min-width: 900px) {
      width: 9vw;
    }
  `;
  return (
    <div
      css={css`
        grid-row: 1 / ${panelHeight};
        align-self: start;
        position: sticky;
        top: 0;
      `}
    >
      <SortButton payload={SORT_LABELS.featured}>
        <SortImage src={Star} alt="Featured" title="Featured" />
      </SortButton>
      <SortButton payload={SORT_LABELS.node}>
        <SortImage src={NodeIcon} alt="Node" title="Node" />
      </SortButton>
      <SortButton payload={SORT_LABELS.vanilla}>
        <SortImage src={JSIcon} alt="JavaScript" title="No framework JS" />
      </SortButton>
      <SortButton payload={SORT_LABELS.react}>
        <SortImage src={ReactIcon} alt="React" title="React" />
      </SortButton>
      <SortButton payload={SORT_LABELS.threeD}>
        <SortImage src={ThreeD} alt="3D" title="3D-centered projects" />
      </SortButton>
      <SortImage
        src={TSIcon}
        css={css`
          transform: scale(0.8);
          filter: grayscale(0.5);
        `}
        alt="TypeScript"
        title="TypeScript - coming soon!"
      />
    </div>
  );
};
export default SortingPanel;
