import { css } from "@emotion/react";

export const screen = css`
  display: grid;
  padding: 2vw;
  overflow: hidden;
  height: 100%;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
  grid-template-columns: [f] 33.33% [s] 33.34% [t] 33.33% [end];
  grid-template-rows: [f] 50% [s] 50% [end];
  background-image: linear-gradient(to bottom, cyan, orange);

  div:hover {
    cursor: pointer;
    color: blanchedalmond;
  }
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
