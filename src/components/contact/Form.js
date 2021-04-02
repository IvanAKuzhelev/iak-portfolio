import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Theme from "../Theme";
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
  const SubmitButton = styled.button`
    &:disabled {
      background-color: ${Theme.green};
      color: ${Theme.bg};
    }
  `;
  const StyledTextArea = StyledInput.withComponent("textarea");
  //netlify forms
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "portfolio",
        name: name,
        email: email,
        pot: pot,
        msg: msg,
      }),
    })
      .then(() => setSent(true))
      .catch((error) => console.log(error));
  };

  return (
    <form
      netlify-honeypot="bot-field"
      css={css`
        grid-area: form;
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        max-width: 100%;
      `}
      onSubmit={handleSubmit}
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
      <input type="hidden" name="form-name" value="portfolio" />
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
      <SubmitButton type="submit" disabled={sent}>
        {sent ? "Sent successfully!" : "Hit me up!"}
      </SubmitButton>
    </form>
  );
};
export default Form;
