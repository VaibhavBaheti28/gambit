/* Modal container */

import { css, keyframes } from "@emotion/react";

const borderAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
`;

export const modal = css`
  display: none;
  position: fixed;
  z-index: 100;
  opacity: 0.7;
  bottom: 6.5vw;
  left: 10vw;
  right: 10vw;
  top: 5vw;
  overflow: hidden;
  animation: ${borderAnimation} 1s ease-in-out forwards;
  border-bottom: 1px solid black;
`;

/* Modal content */
export const modalContent = css`
  height: 100%;
  width: 100%;
`;

/* Close button */
export const closeIcon = css`
  position: fixed;
  top: 5vw;
  right: 10vw;
  width: 2vw;
  height: 2vw;
  color: red;
  cursor: pointer;
  z-index: 500;
`;
