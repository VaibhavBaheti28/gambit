import { css } from "@emotion/react";

export const screen = css`
  display: grid;
  padding: 2vw;
  overflow: hidden;

  height: 100%;
  grid-template-columns: [f] 30% [s] 40% [t] 30% [end];
  grid-template-rows: [f] 15vw [s] 15vw [end];
  background-image: linear-gradient(to bottom right, purple, blue);
  div:hover {
    cursor: pointer;
    color: blanchedalmond;
  }
  border-top: 2vw solid black;
`;

export const about = css`
  min-height: 100%;
  grid-column-start: f;
  grid-column-end: s;
  grid-row-start: f;
  grid-row-end: end;
  justify-self: center;
`;

export const projects = css`
  min-height: 100%;
  grid-column-start: s;
  grid-column-end: t;
  grid-row-start: f;
  grid-row-end: s;
  justify-self: center;
`;

export const blog = css`
  min-height: 100%;
  grid-column-start: s;
  grid-column-end: t;
  grid-row-start: s;
  grid-row-end: end;
  justify-self: center;
`;

export const certificate = css`
  min-height: 100%;
  grid-column-start: t;
  grid-column-end: end;
  grid-row-start: f;
  grid-row-end: s;
  justify-self: center;
`;

export const contact = css`
  min-height: 100%;
  grid-column-start: t;
  grid-column-end: end;
  grid-row-start: s;
  grid-row-end: end;
  justify-self: center;
`;
