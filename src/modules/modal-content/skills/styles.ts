import { css } from "@emotion/react";

export const container = css`
  width: 99.5%;
  height: 33vw;
  border-top: 2vw solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
  border-left: 2px solid black;
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
`;

export const skillsContainer = css`
  padding: 0;
  margin: 0;

  padding-left: 1vw;

  li {
    font-size: 1.8vw;
    list-style-type: square;
  }
`;
