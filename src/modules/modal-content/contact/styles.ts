import { css } from "@emotion/react";

export const screen = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(135deg, #f43b47, #fb8b24);
  height: 100%;
  border-radius: 1rem;
`;

export const search = css`
  margin-top: 2vw;
  margin-bottom: 3vw;
  border-radius: 2rem;
  background-color: whitesmoke;

  label.Mui-focused {
    top: -10px; /* Adjust this value as needed */
    transition: top 0.2s ease-in-out;
    color: slategray;
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
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const app = css`
  min-width: 100px;
  min-height: 100px;
  border-radius: 2rem;
  color: black;
  background: transparent;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  /* Add any other styles you want for your icons here */

  /* Shadow effect on hover */
  &:hover {
    transform: translateY(-2px);
    transform: translateX(2px);
    box-shadow: 5px 5px rgba(10, 10, 10, 1); /* Adjust the shadow properties as needed */
  }
`;
