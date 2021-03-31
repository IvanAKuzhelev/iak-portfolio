import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FancyLink = ({
  img,
  alt,
  text,
  href,
  size = 1,
  color = "inherit",
  extraStyles = "",
}) => {
  const StyledHref = styled.a`
    font-size: ${size}rem;
    color: ${color};
    ${extraStyles}
  `;
  const Icon = styled.img`
    height: ${size}rem;
    margin-bottom: ${-0.25 * size}rem;
  `;
  return (
    <StyledHref href={href} target="_blank" rel="noopener noreferrer">
      <Icon src={img} alt={alt} />
      {text}
    </StyledHref>
  );
};
export default FancyLink;
