import * as React from "react";
import { css } from "@emotion/react";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      css={css`
        //
        height: 100vh;
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "contactCTA" "form";
        //
      `}
    >
      <div>
        <h2
          css={css`
            font-size: 4.5rem;
          `}
        >
          Let's work together!
        </h2>
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
