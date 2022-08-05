import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Theme from "./Theme";
const Header = () => {
  const NavItem = styled.li`
    // Underline on hover
    background: linear-gradient(${Theme.white}, ${Theme.white}) center bottom;
    padding-bottom: 6px;
    background-repeat: no-repeat;
    background-size: 100% 2px;

    @media (min-width: 900px) {
      margin-left: 3vw;
      background-size: 0% 2px;
      transition: all 0.35s;
      &:hover {
        background-size: 100% 2px;
      }
    }
  `;
  const NavLink = styled(Link)`
    text-decoration: none;
    color: ${Theme.white};
  `;
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: space-between;
        background-color: transparent;
        padding: 3vh 3vw 0;
        height: 5vh;
        font-size: 0.7rem;
        position: absolute;
        z-index: 1;
        width: 100vw;
        max-width: 100%;
        flex-direction: column;
        @media (min-width: 900px) {
          flex-direction: row;
          font-size: 1.2rem;
          justify-content: space-between;
          align-items: center;
        }
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
            justify-content: space-between;
          `}
        >
          <NavItem>
            <NavLink to="https://github.com/IvanAKuzhelev">GitHub</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink to="/#projects">Projects</NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink to="/resume">Resume</NavLink>
          </NavItem> */}

          {/* <NavItem>
            <NavLink to="/">Blog</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink to="/#contact">Contact</NavLink>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
