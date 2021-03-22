import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
const Form = () => {
  return (
    <form
      css={css`
        grid-area: "form";
        display: flex;
        flex-direction: column;
      `}
    >
      <label htmlFor="name">Name</label>
      <input id="name" name="name" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" required />
      <label htmlFor="msg">Message</label>
      <textarea id="msg"></textarea>
      <button>Hit me up!</button>
    </form>
  );
};
export default Form;
