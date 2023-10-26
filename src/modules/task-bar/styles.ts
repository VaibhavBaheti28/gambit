import { css } from "@emotion/react";

export const taskBarContainer = css`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 1rem;
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
  &:hover {
    transform: translateY(-5px);
    transform: translateX(2px);
    box-shadow: 5px 5px rgba(0, 50, 0, 0.3); /* Adjust the shadow properties as needed */
  }
`;
