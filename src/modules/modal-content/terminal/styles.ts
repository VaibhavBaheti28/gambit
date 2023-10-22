import { css } from "@emotion/react";
import { container } from "../styles";

export const navbar = css`
  height: 2vw;
  position: sticky;
  width: 100%;
  background-color: #8f8d8d;
  z-index: 5;
  font-size: 1.5vw;
  padding-left: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafafa;
  
`;
export const terminalContainer = css`
  ${container};
  >p,div,h3{
    line-height: 10px;
    font-size: 20px;  
    display: flex;
    align-items: center;
    word-break: break-all;
    flex-wrap: wrap;
    margin:0.25rem;
    padding-top: 0.5rem;
  }

  background-color: black;
  color: green;
  /* position: relative; */

  scroll-behavior: smooth;
  padding:0 1vw;
  height: 100%;
  overflow-y: auto;
`;

export const terminalContent = css`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
`;
export const inputBox = css`
  all: initial;
  width: 100%;
  flex:1;
  color: blue;
  caret-color: darkcyan;
  animation: type 0.5s 1s steps(20, end);
  line-height: 10px;
  font-size: 20px;  
  padding-left:0.5rem;
  padding-top: 0.5rem;
`;


export const widow=css`
  position: relative;
`