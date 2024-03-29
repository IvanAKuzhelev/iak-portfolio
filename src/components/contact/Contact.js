import * as React from "react";
import { css } from "@emotion/react";
import Form from "./Form";
import FancyLink from "../FancyLink";
import emailIcon from "../../images/email-white.svg";
import githubIcon from "../../images/dev-icons/github-white.svg";
import twitterIcon from "../../images/dev-icons/twitter-white.svg";

const Contact = ({ scrollRef }) => {
  return (
    <section
      id="contact"
      ref={scrollRef}
      css={css`
        padding: 5px;
        height: 100vh;
        display: grid;

        grid-template-rows: auto auto auto auto auto 1fr;
        grid-template-columns: 1fr;
        grid-template-areas:
          "cta"
          "info"
          "GitHub"
          "twitter"
          "email"
          "form";
        grid-gap: 10px;

        @media (min-width: 900px) {
          padding: 40px;
          grid-template-rows: auto auto auto auto auto 1fr;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "cta cta"
            "info form"
            "GitHub form"
            "twitter form"
            "email form"
            ". form";
          grid-gap: 30px;
        }
      `}
    >
      <h2
        css={css`
          font-size: 3rem;
          grid-area: cta;
          place-self: center;
          @media (min-width: 900px) {
            font-size: 4.5rem;
          }
        `}
      >
        Let's work together!
      </h2>

      <p
        css={css`
          grid-area: info;
          font-size: 1.2rem;
          text-align: center;
        `}
      >
        I'm available via the form or through the following means:
      </p>
      <FancyLink
        img={githubIcon}
        alt="GitHub"
        text="IvanAKuzhelev"
        href="https://github.com/IvanAKuzhelev"
        size={1.4}
        extraStyles={`grid-area: GitHub;
          place-self: center center;
          `}
      />
      <FancyLink
        img={twitterIcon}
        alt="twitter"
        text="@iakuzhelev"
        href="https://twitter.com/iakuzhelev"
        size={1.4}
        extraStyles={`grid-area: twitter;
          place-self: center center;`}
      />
      <FancyLink
        img={emailIcon}
        alt="email"
        text="ivanakuzhelev@gmail.com"
        href="mailto:ivanakuzhelev@gmail.com"
        size={1.4}
        extraStyles={`grid-area: email;
          place-self: center center;`}
      />
      <Form />
    </section>
  );
};
export default Contact;
