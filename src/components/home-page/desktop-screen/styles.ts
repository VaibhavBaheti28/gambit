import { css } from "@emotion/react";

export const configContent = css`
  background-color: black;
  position: fixed;
  z-index: 100;
  width: 10vw;
  right: 2vw;
  top: 4vw;
  color: white;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: [f] 50% [s] 50% [end];
  grid-template-rows: [f] 5vw [s] 5vw [end];
  justify-self: center;
`;
