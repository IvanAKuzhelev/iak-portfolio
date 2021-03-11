import * as React from "react";
import { css } from "@emotion/react";
import { useState } from "react";
import styled from "@emotion/styled";

const ProjectCard = ({ img, description, features, stack }) => {
  const [displayed, setDisplayed] = useState(description);
  const cardButton = styled.button``;
  return (
    <>
      <div>
        <img />
        <p></p>
      </div>
    </>
  );
};
