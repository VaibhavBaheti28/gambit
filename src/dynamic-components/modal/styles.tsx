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
  bottom: 5vw;
  left: 10vw;
  right: 10vw;
  top: 5vw;
  overflow: auto;
  animation: ${borderAnimation} 1s ease-in-out forwards;
`;

/* Modal content */
export const modalContent = css`
  height: 100%;
`;

/* Close button */
export const closeIcon = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 2vw;
  height: 2vw;
  color: red;
  cursor: pointer;
`;
