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
    /* Mobile styles go here */
    grid-template-columns: [f] 50% [t] 50% [end];
    grid-template-rows: [f] 33.33% [s] 33.34% [t] 33.33% [end];
    font-size: 16px; /* Decrease font size for mobile */
  }

  @media screen and (min-width: 601px) {
    /* Styles for screens wider than 600px */
    grid-template-columns: [f] 33.33% [s] 33.34% [t] 33.33% [end];
    grid-template-rows: [f] 50% [s] 50% [end];
    font-size: 20px; /* Reset font size for wider screens */
  }

  /* The rest of your screen styles here... */
  background-image: linear-gradient(to bottom, #222, #333, #222);
  animation: ${borderAnimation} 5s infinite;
  div:hover {
    cursor: url(https://cdn.custom-cursor.com/db/pointer/32/cute_chill_cat_pointer.png),
      default !important;

    color: #fff;
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
  cursor: url(https://cdn.custom-cursor.com/db/pointer/32/cute_chill_cat_pointer.png),
    default !important;
`;

export const about = css`
  grid-column: span 1; /* Make the "About" element span two columns on mobile */
  grid-row: span 2;
  justify-self: center;
  color: #fff; /* White text */
  font-size: 1.5rem; /* Larger font size */
  display: flex;
  align-items: center;
  ${innerDiv}

  &:hover {
    background-color: #00a8cc; /* Darker background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }

  @media screen and (max-width: 600px) {
    /* Mobile styles for "About" div */
    grid-row: span 1; /* Make the "About" element span one column on mobile */
    grid-column: span 2;
  }

  ::before {
    content: "🎮";
    font-size: 20vh; /* Adjust the size as needed */
    position: absolute;

    z-index: -1; /* Place the gaming console icon behind the content */
  }
`;

export const skills = css`
  min-height: 100%;
  grid-column: span 1; /* Make the "Skills" element span two columns on mobile */
  grid-row: span 1;
  justify-self: center;
  color: #fff; /* White text */
  font-size: 1.5rem; /* Larger font size */
  display: flex;
  align-items: center;
  ${innerDiv}
  background-color: #43aa8b; /* Background color for the third div */

  &:hover {
    background-color: #90be6d; /* Darker background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }

  @media screen and (max-width: 600px) {
    /* Mobile styles for "Skills" div */
    grid-column: span 1; /* Make the "Skills" element span one column on mobile */
  }
  ::before {
    content: "🔧";
    font-size: 20vh; /* Adjust the size as needed */
    position: absolute;
    z-index: -1;
  }
`;

export const projects = css`
  min-height: 100%;
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
  @media screen and (max-width: 600px) {
    /* Mobile styles for "Skills" div */
    grid-column: span 1; /* Make the "Skills" element span one column on mobile */
  }
  &::before {
    content: "🚀";
    font-size: 20vh;
    position: absolute;
    z-index: -1;
  }
`;

export const certificate = css`
  min-height: 100%;
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
  @media screen and (max-width: 600px) {
    /* Mobile styles for "Skills" div */
    grid-column: span 1; /* Make the "Skills" element span one column on mobile */
  }
  ::before {
    content: "📜"; /* Unicode character for a certificate icon */
    font-size: 20vh;
    position: absolute;
    z-index: -1;
  }
`;

export const contact = css`
  .contact::before {
    content: "📧"; /* Unicode character for an email icon */
    font-size: 2rem;
    margin-right: 0.5rem;
  }
  min-height: 100%;
  justify-self: center;

  color: #0077b6; /* White text */
  font-size: 1.5rem; /* Larger font size */
  display: flex;
  align-items: center;
  ${innerDiv}
  background-color: #f3722c; /* Background color for the fifth div */

  &:hover {
    background-color: #0077b6; /* Darker background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }
  @media screen and (max-width: 600px) {
    /* Mobile styles for "Skills" div */
    grid-column: span 1; /* Make the "Skills" element span one column on mobile */
  }
  ::before {
    content: "📧";
    font-size: 20vh;
    position: absolute;
    z-index: -1;
  }
`;

// Additional styling for hover effect (optional)
