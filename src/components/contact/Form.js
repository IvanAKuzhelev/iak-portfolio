import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pot, setPot] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const hiddenInput = styled.input`
    display: none;
  `;
  // REFACTOR TO STYLED!!!!
  const inputStyles = `
    margin-bottom: 12px;
    margin-top: 2px; 
    border-radius: 7px;
    
    `;
  return (
    <form
      // netlify-honeypot="bot-field"
      css={css`
        grid-area: form;
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
      `}
    >
      {/* Netlify spam prevention */}
      <label
        css={css`
          display: none;
        `}
        htmlFor="pot"
      >
        Don’t fill this out if you’re human:
      </label>
      <input
        css={css`
          display: none;
        `}
        name="bot-field"
        id="pot"
        value={pot}
        onChange={(e) => setPot(e.target.value)}
      />
      <label htmlFor="name">Name</label>
      <input
        css={css`
          ${inputStyles}
        `}
        id="name"
        name="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="msg">Message</label>
      <textarea
        css={css`
          ${inputStyles}
        `}
        rows="7"
        id="msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      ></textarea>
      <button>Hit me up!</button>
    </form>
  );
};
export default Form;
