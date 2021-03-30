import * as React from "react";
import styled from "@emotion/styled";
import emailIcon from "../images/email_black_24dp.svg";
import githubIcon from "../images/dev-icons/github.svg";
import liveIcon from "../images/live.svg";
import { Global, css } from "@emotion/react";
import FancyLink from "../components/FancyLink";

const Resume = () => {
  const ResumeContainer = styled.article`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.6fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "name name contacts"
      "projects projects about"
      "projects projects skills"
      "education education skills"
      "experience experience skills";
    height: 100vh;
  `;
  const UnstyledList = styled.ul`
    list-style: none;
  `;
  const Icon = styled.img`
    height: 1rem;
    margin-bottom: -0.25rem;
  `;
  const ResumeSection = styled.section`
    grid-area: ${({ area }) => area};
  `;
  const Project = ({ title, text, github, live }) => {
    const Item = styled.li`
      display: grid;
      grid-template-columns: auto auto 1fr;
      grid-template-rows: auto auto 1fr;
      grid-template-areas:
        "title title title"
        "github live ."
        "text text text";
    `;
    return (
      <Item>
        <h4
          css={css`
            grid-area: title;
          `}
        >
          {title}
        </h4>
        <FancyLink
          img={githubIcon}
          alt="GitHub"
          text="GitHub"
          href={github}
          css={css`
            grid-area: github;
          `}
          // size={1.4}
        />
        <FancyLink
          img={liveIcon}
          alt="web"
          text="Live"
          href={live}
          // size={1.4}
        />
        <p
          css={css`
            grid-area: text;
          `}
        >
          {text}
        </p>
      </Item>
    );
  };
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            font-family: "Fira Code";
          }
          h1 {
            font-size: 2rem;
          }
        `}
      />
      <ResumeContainer>
        <ResumeSection area="name">
          <h1>Ivan A. Kuzhelev</h1>
          <h2>Javascript developer</h2>
        </ResumeSection>
        <ResumeSection area="contacts">
          <UnstyledList>
            <li>
              <a
                css={css`
                  color: inherit;
                `}
                href="https://iak.codes/"
              >
                <Icon src={liveIcon} alt="web" />
                iak.codes
              </a>
            </li>
            <li>
              <a href="mailto:ivanakuzhelev@gmail.com">
                <Icon src={emailIcon} alt="email" />
                ivanakuzhelev@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/IvanAKuzhelev">
                <Icon src={githubIcon} alt="github" />
                github.com/IvanAKuzhelev
              </a>
            </li>
          </UnstyledList>
        </ResumeSection>
        <ResumeSection area="projects">
          <h3>My projects</h3>
          <UnstyledList>
            <Project
              title="Developer portfolio"
              text="Portfolio written in React/Gatsby. Some of the highlights are
                conditional sorting/rendering layout made with CSS grid and use
                of netlify forms."
              github="https://github.com/IvanAKuzhelev/iak-portfolio"
              live=""
            />
            <li>
              <h4>Developer portfolio</h4>
              <p>
                Portfolio written in React/Gatsby. Some of the highlights are
                conditional sorting/rendering layout made with CSS grid and use
                of netlify forms.
              </p>
            </li>
            <li>
              <h4>Fullstack box visualisator.</h4>
              <p>
                A box rendering with the THREE.js BufferGeometry from the
                server-sent data in the Gatsby site. A user can change the
                dimensions of the box via the form which requests the new data.
                The server is a simple node app hosted on a Linux VM managed by
                me (NGINX, SSL, pm2).
              </p>
            </li>
          </UnstyledList>
        </ResumeSection>
        <ResumeSection area="about">
          <h3>About</h3>
        </ResumeSection>
        <ResumeSection area="skills">
          <h3>Skills</h3>
        </ResumeSection>
        <ResumeSection area="education">
          <h3>Education</h3>
        </ResumeSection>
        <ResumeSection area="experience">
          <h3>Experience</h3>
        </ResumeSection>
        {/* <ResumeSection area=""></ResumeSection> */}
      </ResumeContainer>
    </>
  );
};
export default Resume;
