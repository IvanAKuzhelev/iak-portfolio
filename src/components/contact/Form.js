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
  const HiddenInput = styled.input`
    display: none;
  `;
  const HiddenLabel = HiddenInput.withComponent("label");
  const StyledInput = styled.input`
    margin-bottom: 12px;
    margin-top: 2px;
    border-radius: 7px;
  `;
  const StyledTextArea = StyledInput.withComponent("textarea");
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
      <HiddenLabel htmlFor="pot">
        Don’t fill this out if you’re human:
      </HiddenLabel>
      <HiddenInput
        name="bot-field"
        id="pot"
        value={pot}
        onChange={(e) => setPot(e.target.value)}
      />
      <label htmlFor="name">Name</label>
      <StyledInput
        id="name"
        name="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <StyledInput
        id="email"
        name="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="msg">Message</label>
      <StyledTextArea
        rows="7"
        id="msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      ></StyledTextArea>
      <button>Hit me up!</button>
    </form>
  );
};
export default Form;
