import * as React from "react";
import { css } from "@emotion/react";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      css={css`
        height: 100vh;
        padding: 40px;
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "cta cta"
          "info form";
      `}
    >
      <h2
        css={css`
          font-size: 4.5rem;
          grid-area: cta;
          place-self: center;
        `}
      >
        Let's work together!
      </h2>
      <div
        css={css`
          grid-area: info;
        `}
      >
        <p>
          I'm available through the means below or you can contact me via the
          form here.
        </p>
      </div>
      <Form />
    </section>
  );
};
export default Contact;
