import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const inputStyles = `
    margin-bottom: 12px;
    margin-top: 2px; 
    border-radius: 7px;
    
    `;
  return (
    <form
      css={css`
        grid-area: form;
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
      `}
    >
      <label htmlFor="name">Name</label>
      <input
        css={css`
          ${inputStyles}
        `}
        id="name"
        name="name"
        value={name}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        css={css`
          ${inputStyles}
        `}
        id="email"
        name="email"
        value={email}
        required
      />
      <label htmlFor="msg">Message</label>
      <textarea
        css={css`
          ${inputStyles}
        `}
        rows="7"
        id="msg"
        value={msg}
      ></textarea>
      <button>Hit me up!</button>
    </form>
  );
};
export default Form;
