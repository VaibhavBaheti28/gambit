import { css } from "@emotion/react";

export const sidebar = css`
  width: 20%;
  padding: 0;
  height: 33vw;
  position: sticky;
  background-color: slategray;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding: 0;
    border: 0;
    margin: 0;
    font-size: 3vw;
    padding: 1vw;
  }
`;

export const explore = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid black;
  svg {
    width: 2vw;
    height: 2vw;
  }
`;
