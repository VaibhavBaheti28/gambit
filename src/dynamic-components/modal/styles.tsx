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
  bottom: 5rem;
  left: 8rem;
  right: 8rem;
  top: 5rem;
  overflow: hidden;
  animation: ${borderAnimation} 1s ease-in-out forwards;
  border-bottom: 1px solid black;
  @media screen and (max-width: 600px) {
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
  }
`;

/* Modal content */
export const modalContent = css`
  height: 100%;
  width: 100%;
`;

/* Close button */
export const closeIcon = css`
  position: fixed;
  top: 5rem;
  right: 8rem;
  color: blue;

  cursor: url(https://cdn.custom-cursor.com/db/pointer/32/cute_chill_cat_pointer.png),
    default !important;
  z-index: 101;
  font-size: 30px;
  @media screen and (max-width: 600px) {
    top: 0;
    right: 0;
  }
`;
