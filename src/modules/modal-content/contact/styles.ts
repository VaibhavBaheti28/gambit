import { css } from "@emotion/react";

export const screen = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const search = css`
  margin-bottom: 3vw;
  border-radius: 2rem;
  background-color: whitesmoke;

  label.Mui-focused {
    top: -10px; /* Adjust this value as needed */
    transition: top 0.2s ease-in-out;
    color: slategray;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    outline: none;
    border-color: transparent;
    box-shadow: none;
  }

  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    outline: none;
    border-color: transparent;
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
`;
