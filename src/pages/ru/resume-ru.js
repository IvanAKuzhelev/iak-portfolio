import * as React from "react";
import styled from "@emotion/styled";
import emailIcon from "../../images/email_black_24dp.svg";
import githubIcon from "../../images/dev-icons/github.svg";
import liveIcon from "../../images/live.svg";
import pdfIcon from "../../images/pdf.svg";
import resumePDF from "../../pdf/IAKuzhelev-Resume.pdf";
import { Global, css } from "@emotion/react";
import FancyLink from "../../components/FancyLink";
import Theme from "../../components/Theme";
import { Helmet } from "react-helmet";
import favicon from "../../images/favicon.svg";

const Resume = () => {
  const Circle = styled.div`
    background-color: ${Theme.bg};
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    position: absolute;
    bottom: 70px;
    right: ${({ pos }) => 2 + pos * 5}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Theme.white};
    @media print {
      display: none;
    }
  `;
  const ResumeContainer = styled.article`
    height: 100vh;
    display: grid;
    padding: 3px 3px 0;
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
    @media print {
      grid-template-rows: auto auto auto auto;
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        "name contacts"
        "about skills"
        "projects skills"
        "education experience";
    } ;
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
          @media print {
            a {
              text-decoration: none;
            }
            a:visited {
              color: ${Theme.bg};
            }
          }
        `}
      />
      <ResumeContainer>
        <ResumeSection area="name">
          <h1>Иван Кужелев</h1>
          <h2>Javascript разработчик</h2>
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
          <h3>Мои проекты</h3>
          <UnstyledList>
            <Project
              title="Developer portfolio"
              text="Портфолио написанное на React/Gatsby. В функционал входят
    conditional sorting/rendering, CSS grid и использование netlify forms.
"
              github="https://github.com/IvanAKuzhelev/iak-portfolio/"
              live="https://iak.codes/"
            />
            <Project
              title="Fullstack box visualisator"
              text="Коробочка, рендерящаяся с помощью THREE.js BufferGeometry на основе данных полученных с сервера Gatsby-клиентом. Пользователь может изменять размеры с помощью формы посылающей запрос на сервер.
    Присутствует ночной режим, использующий localStorage и предпочтения в операционной системе. Сервером является Node JS приложение на Linux VM на Azure (NGINX, SSL, pm2).
"
              github="https://github.com/IvanAKuzhelev/box-server-fe/"
              live="https://3d-box.iak.codes/"
            />
          </UnstyledList>
        </ResumeSection>
        <ResumeSection area="about">
          <h3>О себе</h3>
          <p>
            Ищу возможности применять и развивать знания JavaScript на практике.
            Заинтересован как возможностями frontend 'a (есть опыт с React и
            Gatsby), так и backend 'a (Node, Express). Могу запустить сервер c
            NGINX на VM. В ближайшее время планирую изучить WebSockets,
            Typescript и Next. С радостью скорректирую планы под конкретные
            нужды.
          </p>
        </ResumeSection>
        <ResumeSection area="skills">
          <h3>Навыки</h3>
          <ul>
            <li>JavaScript(ES6+)</li>
            <li>React</li>
            <li>CSS in JS</li>
            <li>Gatsby</li>
            <li>THREE JS</li>
            <li>Node JS</li>
            <li>NGINX</li>
            <li>Certbot</li>
            <li>semantic HTML</li>
            <li>CSS</li>
            <li>English - Upper Intermediate</li>
            {/* <li>TypeScript familiarity</li> */}
          </ul>
        </ResumeSection>
        <ResumeSection area="education">
          <h3>Образование</h3>
          <h4>Frontend Masters, 2020-2021</h4>
          <ul>
            <li>Complete Intro to Web Development</li>
            <li>JavaScript: From Fundamentals to Functional JS</li>
            <li>JavaScript: The Hard Parts</li>
            <li>The Hard Parts of Object Oriented JavaScript</li>
            <li>Full Stack for Front-End Engineers</li>
            <li>Introduction to Node.js</li>
            <li>Intro and Intermediate React</li>
            <li>State Management in Pure React</li>
          </ul>
          <h4>FreeCodeCamp, 2019-2021</h4>
          <p>Основы JS, CSS, HTML</p>
          <h4>ННГУ им. Н.И. Лобачевского, 2018</h4>
          <p>Фундаментальная и прикладная химия - специалист</p>
        </ResumeSection>
        <ResumeSection area="experience">
          <h3>Опыт работы</h3>
          <UnstyledList>
            <li>
              <h4>
                АО ННИИММ «Прометей»
                <br />
                11/2019-н.в.
              </h4>
              <p>
                Инженер-химик Методичное и педантичное выполнение работы в
                стрессовых ситуациях.
              </p>
            </li>
            <li>
              <h4>
                ИХВВ им. Г.Г. Девятых РАН
                <br />
                10/2018-12/2019
              </h4>
              <p>
                Химик-исследователь. Работа в команде над творческими решениями
                технологических задач. Представление результатов исследований
                (конференции и патент)
              </p>
            </li>
          </UnstyledList>
        </ResumeSection>
        {/* <ResumeSection area=""></ResumeSection> */}
        <Circle pos={0}>
          <a href={resumePDF} download>
            <img
              css={css`
                height: 2rem;
              `}
              src={pdfIcon}
              alt="Download pdf"
              title="Download pdf"
            />
          </a>
        </Circle>
      </ResumeContainer>
    </>
  );
};
export default Resume;
