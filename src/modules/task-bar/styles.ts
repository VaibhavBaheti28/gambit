import { css } from "@emotion/react";

export const taskBarContainer = css`
  display: flex;
  z-index: 101;
  justify-content: space-evenly;
  padding: 1rem 0 0 0;
  gap: 2rem;
  /* opacity: 1; */
  background-color: (255, 255, 255, 0.5);
`;

export const shortcutIcon = css`
  border-radius: 8px;
  display: flex;
  padding: 0.5rem;
  background-color: rgb(255, 255, 255, 0.5);
  height: 2rem;
  align-items: center;
  justify-content: center;
`;
