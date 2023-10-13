import { css } from "@emotion/react";

export const container = css`
  height: 90%;
  background-color: black;
  color: green;
  border-top: 2vw solid darkgray;
  border-top: relative;
  scroll-behavior: smooth;
  padding: 0;
  padding-left: 1vw;
  padding-top: 20px;

  p {
    line-height: 15px;
    font-size: 20px;
    margin: 0;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 20px;
  }
  div {
    height: 10px;
    margin-top: 0;
    padding-top: 0;
    font-size: 20px;
  }
`;
export const terminalContent = css`
  display: flex;
  align-items: center;
`;
export const inputBox = css`
  all: initial;
  /* Optionally, set the display and border properties */
  display: inline-block;
  color: red;
  caret-color: darkcyan;
`;

export const cssTyping = css`
  p {
    border-right: 0.15em solid orange;
    font-family: "Courier";
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
  }
  p:nth-child(1) {
    width: 7.3em;
    -webkit-animation: type 2s steps(40, end);
    animation: type 2s steps(40, end);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  p:nth-child(2) {
    width: 11.5em;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  p:nth-child(3) {
    width: 7.3em;
    opacity: 0;
    -webkit-animation:
      type3 5s steps(20, end),
      blink 0.5s step-end infinite alternate;
    animation:
      type3 5s steps(20, end),
      blink 0.5s step-end infinite alternate;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  @keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: 0.15em solid orange;
    }
    100% {
      border: none;
    }
  }

  @-webkit-keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: 0.15em solid orange;
    }
    100% {
      border: none;
    }
  }

  @keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid orange;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @-webkit-keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid orange;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      border-color: tranparent;
    }
  }
`;
