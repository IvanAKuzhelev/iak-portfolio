import * as React from "react";
import styled from "@emotion/styled";
import emailIcon from "../images/email_black_24dp.svg";
import githubIcon from "../images/dev-icons/github.svg";
import liveIcon from "../images/live.svg";
import { Global, css } from "@emotion/react";
import FancyLink from "../components/FancyLink";
import Theme from "../components/Theme";

const Resume = () => {
  const ResumeContainer = styled.article`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 0.6fr auto auto 1fr 1fr;
    grid-template-areas:
      ". name contacts"
      "about projects skills"
      "experience projects skills"
      "experience education skills";
    grid-gap: 15px;
    height: 100vh;
  `;
  const UnstyledList = styled.ul`
    list-style: none;
    padding-inline-start: 0;
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
      margin-top: 10px;
      grid-template-columns: auto auto 1fr;
      grid-template-rows: auto auto 1fr;
      grid-template-areas:
        "title title title"
        "github live ."
        "text text text";
      grid-gap: 3px 10px;
      max-width: 700px;
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
          extraStyles="grid-area: github;"
        />
        <FancyLink
          img={liveIcon}
          alt="web"
          text="Live"
          href={live}
          extraStyles="grid-area: live;"
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
            color: ${Theme.bg};
            background-color: ${Theme.white};
            font-family: "Fira Code", monospace;
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
              <FancyLink
                href="https://iak.codes/"
                img={liveIcon}
                alt="web"
                text="iak.codes"
              />
            </li>
            <li>
              <FancyLink
                href="mailto:ivanakuzhelev@gmail.com"
                img={emailIcon}
                alt="email"
                text="ivanakuzhelev@gmail.com"
              />
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
              github="https://github.com/IvanAKuzhelev/iak-portfolio/"
              live="https://iak.codes/"
            />
            <Project
              title="Fullstack box visualisator"
              text="A box rendering with the THREE.js BufferGeometry from the
                server-sent data in the Gatsby site. A user can change the
                dimensions of the box via the form which requests the new data.
                The server is a simple node app hosted on a Linux VM (NGINX, SSL, pm2)."
              github="https://github.com/IvanAKuzhelev/box-server-fe/"
              live="https://3d-box.iak.codes/"
            />
          </UnstyledList>
        </ResumeSection>
        <ResumeSection area="about">
          <h3>About</h3>
          <p>
            Chemist turned web dev in search of the neverending supply of new
            challenges and financial stability. Looking for professional growth
            via building cool things on the web.
          </p>
        </ResumeSection>
        <ResumeSection area="skills">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript(ES6+)</li>
            <li>React</li>
            <li>CSS in JS</li>
            <li>Gatsby</li>
            <li>Node JS</li>
            <li>THREE JS</li>
            <li>semantic HTML</li>
            <li>CSS</li>
            {/* <li>TypeScript familiarity</li> */}
          </ul>
        </ResumeSection>
        <ResumeSection area="education">
          <h3>Education</h3>
        </ResumeSection>
        <ResumeSection area="experience">
          <h3>Experience</h3>
          <UnstyledList>
            <li>
              <h4>Prometheus - foundry, 2019-present</h4>
              <p></p>
            </li>
            <li>
              <h4>G.G. Devyatykh IChPS - research institution, 2018-2019</h4>
            </li>
          </UnstyledList>
        </ResumeSection>
        {/* <ResumeSection area=""></ResumeSection> */}
      </ResumeContainer>
    </>
  );
};
export default Resume;
