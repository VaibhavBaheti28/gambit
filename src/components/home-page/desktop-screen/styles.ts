import { css } from "@emotion/react";

export const configContent = css`
  background-color: black;
  position: fixed;
  z-index: 100;
  width: 8rem;
  height: 8rem;
  right: 2rem;
  top: 3rem;
  color: white;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: [f] 50% [s] 50% [end];
  grid-template-rows: [f] 4rem [s] 4rem [end];
  align-items: center;
`;
