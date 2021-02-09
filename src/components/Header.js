import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
const Header = () => {
  const NavItem = styled.li`
    margin-left: 3vw;
    background: linear-gradient(white, white) center bottom;
    padding-bottom: 6px;
    background-size: 0% 2px;
    background-repeat: no-repeat;
    transition: all 0.35s;
    &:hover {
      /* width: 100%; */
      background-size: 100% 2px;
    }
  `;
  const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
  `;
  return (
    <header
      css={css`
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
        height: 5vh;
        padding: 3vh 5vw 0;
        font-size: 1.2rem;
        position: absolute;
        z-index: 1;
        width: 100vw;

        display: flex;
      `}
    >
      <p
        css={css`
          padding-bottom: 6px;
        `}
      >
        Ivan A. Kuzhelev
      </p>
      <nav>
        <ul
          css={css`
            display: flex;
          `}
        >
          <NavItem>
            <NavLink to="/">Projects</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Contact</NavLink>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
