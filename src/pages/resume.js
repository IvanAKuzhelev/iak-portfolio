import * as React from "react";
import styled from "@emotion/styled";
import emailIcon from "../images/email_black_24dp.svg";
import githubIcon from "../images/dev-icons/github.svg";
import liveIcon from "../images/live.svg";
import { Global, css } from "@emotion/react";
import FancyLink from "../components/FancyLink";
import Theme from "../components/Theme";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.svg";

const Resume = () => {
  const ResumeContainer = styled.article`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-areas:
      "name"
      "about"
      "projects"
      "skills"
      "education"
      "experience"
      "contacts";

    @media (min-width: 900px) {
      grid-gap: 15px;
      padding: 20px 20px 0;
      height: 100vh;
      grid-template-rows: 0.35fr auto auto 1fr;
      grid-template-columns: 1fr 2.2fr 1fr;
      grid-template-areas:
        ". name contacts"
        "about projects skills"
        "experience projects skills"
        "experience education skills";
    }
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
    border-bottom: 2px solid lightgray;
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
      <Helmet>
        <title>Ivan A. Kuzhelev - Resume</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
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
          li,
          p {
            font-size: 0.9rem;
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
          <h4>Frontend Masters, 2020-2021</h4>
          <ul>
            <li>Complete Intro to Web Development</li>
            <li>JavaScript: From Fundamentals to Functional JS</li>
            <li>JavaScript: The Hard Parts</li>
            <li>The Hard Parts of Object Oriented JavaScript</li>
            <li>Intro and Intermediate React</li>
            <li>State Management in Pure React</li>
          </ul>
          <h4>FreeCodeCamp, 2019-2021</h4>
          <p>JS, CSS, HTML basics</p>
          <h4>Lobachevsky University</h4>
          <p>Pure and applied chemistry - specialist</p>
        </ResumeSection>
        <ResumeSection area="experience">
          <h3>Experience</h3>
          <UnstyledList>
            <li>
              <h4>
                Prometheus - foundry,
                <br />
                2019-present
              </h4>
              <p>
                Chemical engineer. Methodical work in a high-pressure
                environment.
              </p>
            </li>
            <li>
              <h4>
                ICHPS - research institution,
                <br />
                2018-2019
              </h4>
              <p>
                Researcher. Teamwork on creative technological solutions.
                Presenting research at various conferences.
              </p>
            </li>
          </UnstyledList>
        </ResumeSection>
        {/* <ResumeSection area=""></ResumeSection> */}
      </ResumeContainer>
    </>
  );
};
export default Resume;
