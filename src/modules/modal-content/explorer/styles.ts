import { css, keyframes } from "@emotion/react";

// Define a keyframe animation for the border
const borderAnimation = keyframes`
  0% {
    border-color: #FF7A00; /* Initial border color (brighter orange) */
  }
  50% {
    border-color: #003366; /* Middle border color (darker blue) */
  }
  100% {
    border-color: #333333; /* Final border color (darker gray) */
  }
`;

export const screen = css`
  display: grid;
  overflow: hidden;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
  grid-template-columns: [f] 33.33% [s] 33.34% [t] 33.33% [end];
  grid-template-rows: [f] 50% [s] 50% [end];
  background-image: linear-gradient(
    to bottom,
    #222,
    #333,
    #222
  ); /* Dark background with a black middle section */

  animation: ${borderAnimation} 5s infinite; /* Apply the border animation */

  div:hover {
    cursor: pointer;
    color: #fff; /* White text on hover */
  }
`;

export const innerDiv = css`
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff; /* White text */
  font-size: 1.5rem; /* Larger font size */
  border-radius: 5px; /* Rounded corners */
  transition:
    background-color 0.3s,
    transform 0.3s; /* Smooth transition on hover */
  cursor: pointer;
`;

export const about = css`
  min-height: 100%;

  grid-column-start: f;
  grid-column-end: s;
  grid-row-start: f;
  grid-row-end: end;
  justify-self: center;
  color: #fff; /* White text */
  font-size: 1.5rem; /* Larger font size */
  display: flex;
  align-items: center;
  ${innerDiv}
  background-color: #0077b6; /* Background color for the first div */

  &:hover {
    background-color: #00a8cc; /* Darker background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

export const projects = css`
  min-height: 100%;
  grid-column-start: s;
  grid-column-end: t;
  grid-row-start: f;
  grid-row-end: s;
  justify-self: center;
  color: #fff; /* White text */
  font-size: 1.5rem; /* Larger font size */
  display: flex;
  align-items: center;

  ${innerDiv}
  background-color: #f94144; /* Background color for the second div */

  &:hover {
    background-color: #f3722c; /* Darker background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

export const skills = css`
  min-height: 100%;
  grid-column-start: s;
  grid-column-end: t;
  grid-row-start: s;
  grid-row-end: end;
  justify-self: center;
  color: #fff; /* White text */
  font-size: 1.5rem; /* Larger font size */
  display: flex;
  align-items: center;

  ${innerDiv}
  & background-color: #43aa8b; /* Background color for the third div */

  &:hover {
    background-color: #90be6d; /* Darker background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

export const certificate = css`
  min-height: 100%;
  grid-column-start: t;
  grid-column-end: end;
  grid-row-start: f;
  grid-row-end: s;
  justify-self: center;
  color: #fff; /* White text */
  font-size: 1.5rem; /* Larger font size */
  display: flex;
  align-items: center;

  ${innerDiv}
  background-color: #577590; /* Background color for the fourth div */

  &:hover {
    background-color: #f9c74f; /* Darker background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

export const contact = css`
  min-height: 100%;
  grid-column-start: t;
  grid-column-end: end;
  grid-row-start: s;
  grid-row-end: end;
  justify-self: center;
  color: #fff; /* White text */
  font-size: 1.5rem; /* Larger font size */
  display: flex;
  align-items: center;
  ${innerDiv}
  background-color: #f3722c; /* Background color for the fifth div */

  &:hover {
    background-color: #0077b6; /* Darker background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

// Additional styling for hover effect (optional)
