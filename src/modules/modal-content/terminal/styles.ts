import { css } from "@emotion/react";
import { container } from "../styles";

export const navbar = css`
  height: 2vw;
  position: sticky;
  width: 100%;
  background-color: #8f8d8d;
  z-index: 5;
  font-size: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafafa;
`;
export const terminalContainer = css`
  ${container};
  flex-direction: column;
  > p,
  div,
  h3 {
    line-height: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    word-break: break-all;
    padding-top: 0.5rem;
  }
  border: 0;

  color: green;
  /* position: relative; */

  scroll-behavior: smooth;
  height: 100%;
  overflow: auto;
`;

export const terminalContent = css`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding: 0 1vw;
  width: 100%;
  margin: 0;
  p,
  div,
  h3 {
    padding: 0;
    margin: 0;
    line-height: 10px;
    font-size: 20px;
    display: flex;
    word-break: break-all;
    padding-top: 0.5rem;
    padding-bottom: 0.2rem;
  }
  height: 100%;
  overflow-x: wrap;
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
`;

export const widow = css`
  position: relative;
`;
