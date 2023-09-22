import { css } from "@emotion/react";

export const screen = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const search = css`
  width: 100%;
  height: 3vw;
  margin-bottom: 4vw;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 0 1rem;
`;

export const appContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const app = css`
  min-width: 100px;
  min-height: 100px;
  border-radius: 2rem;
  color: black;
  background: transparent;
`;
