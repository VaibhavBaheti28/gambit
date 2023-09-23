/* Modal container */

import { css } from "@emotion/react";

export const modal = css`
  display: none;
  position: fixed;
  z-index: 100;
  background-color: slategray;
  bottom: 5vw;
  left: 10vw;
  right: 10vw;
  top: 5vw;
  border-radius: 2rem;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  overflow: auto;
`;

/* Modal content */
export const modalContent = css`
  margin: 15% auto;
  margin-top: 2vw;
  margin-bottom: 2vw;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Close button */
export const closeIcon = css`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  margin-right: 1rem;
  color: red;
  cursor: pointer;
`;
