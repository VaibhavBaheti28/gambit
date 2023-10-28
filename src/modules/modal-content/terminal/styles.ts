import { css } from "@emotion/react";
import { container } from "../styles";

export const terminalContent = css`
  ${container};
  flex-direction: column;
  div,
  h3 {
    line-height: 15px;
    font-size: 20px;
    display: flex;
    align-items: baseline;
    @media screen and (max-width: 600) {
      font-size: 10px;
    }
  }
  p {
    line-height: 15px;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    @media screen and (max-width: 600) {
      font-size: 10px;
    }
    word-break: break-all;
  }
  border: 0;

  color: green;
  /* position: relative; */

  scroll-behavior: smooth;
  height: 100%;
  overflow: auto;
`;

export const terminalContainer = css`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding: 0 1vw;
  width: 100%;
  margin: 0;
  div,
  h3 {
    padding: 0;
    padding-left: 5px;
    margin: 0;
    line-height: 15px;
    font-size: 20px;
    display: flex;
    padding-bottom: 0.2rem;
    @media screen and (max-width: 600) {
      font-size: 10px;
    }
  }
  p {
    line-height: 15px;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    @media screen and (max-width: 600) {
      font-size: 10px;
    }
    word-break: break-all;
  }
  height: 100%;
  overflow-x: wrap;
`;

export const commandLine = css`
  align-items: center;
`;
export const inputBox = css`
  all: initial;
  flex: 1;
  color: blue;
  caret-color: darkcyan;
  animation: type 0.5s 1s steps(20, end);
  line-height: 10px;
  font-size: 20px;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  @media screen and (max-width: 600) {
    font-size: 10px;
  }
`;

export const navbar = css`
  height: 2rem;
  position: sticky;
  width: 100%;
  background-color: #8f8d8d;
  z-index: 5;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafafa;
`;
