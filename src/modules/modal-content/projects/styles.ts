import { css } from "@emotion/react";

export const container = css`
  width: 99.5%;
  height: 33vw;
  border-top: 2vw solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const projectContainer = css`
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h1 {
    padding: 0;

    margin: 0;
    font-size: 3vw;
  }
  p {
    font-size: 2vw;
  }
`;
