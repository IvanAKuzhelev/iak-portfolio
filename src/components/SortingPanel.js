import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { SORT_LABELS } from "./PROJECTS_DATA";

import JSIcon from "../images/dev-icons/javascript.svg";
import TSIcon from "../images/dev-icons/typescript.svg";
import ReactIcon from "../images/dev-icons/react.svg";
import NodeIcon from "../images/dev-icons/nodejs.svg";
import ThreeD from "../images/3d.svg";
import Star from "../images/star.svg";

const SortingPanel = ({ panelHeight, setDisplayRequest }) => {
  const SortButton = (props) => {
    return (
      <button
        css={css`
          all: unset;
          transform: scale(0.9);
          filter: grayscale(0.15);
          &:hover {
            transform: scale(1);
            filter: grayscale(0);
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
    width: 9vw;
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
      <SortButton
        payload={SORT_LABELS.featured}
        onClick={(props) => {
          console.log(props.payload);
          setDisplayRequest(props.payload);
        }}
      >
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
          transform: scale(0.9);
          filter: grayscale(0.5);
        `}
        alt="TypeScript"
        title="TypeScript - coming soon!"
      />
    </div>
  );
};
export default SortingPanel;
