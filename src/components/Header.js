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
    &::after {
      /* content: "";
      width: 0%;
      height: 1px;
      display: block;
      background: white; */
      /* transition: 300ms; */
    }
  `;
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
        height: 10vh;
        padding: 0 5vw;
        font-size: 1.2rem;
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
