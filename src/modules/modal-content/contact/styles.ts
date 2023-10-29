import { css } from "@emotion/react";

export const screen = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Define a circular gradient background */
  background: radial-gradient(circle, #005b41, #232d3f);
  /* Lighter gradient background */
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite; /* Add animation for a subtle effect */
  color: white; /* Light text color for visibility on the lighter background */
  height: 100%;
  border-radius: 0.8rem;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const search = css`
  margin-top: 2vw;
  margin-bottom: 3vw;
  border-radius: 2rem;
  background: #008170; /* Dark background color */

  label.Mui-focused {
    top: -10px;
    transition: top 0.2s ease-in-out;
    color: lightgray; /* Light text color for label */
  }

  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    outline: none;
    border-color: transparent;
    box-shadow: none;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    outline: none;
    border-color: transparent;
    box-shadow: none;
  }
`;

export const appContainer = css`
  display: flex;
  flex-direction: row;
  flex: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const app = css`
  @media screen and (max-width: 600px) {
    height: 90;
    width: 90;
    padding: 1rem;
  }
  border-radius: 2rem;
  color: white; /* Light text color for visibility on dark background */
  background: transparent;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  /* Shadow effect on hover */
  &:hover {
    transform: translate(
      -2px,
      -2px
    ); /* Adjust the transformation values as needed */
    box-shadow: 5px 5px rgba(255, 255, 255, 0.2); /* Adjust the shadow properties as needed */
  }
`;
