import { css } from "@emotion/react";

export const taskBarContainer = css`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 0.001rem;
  padding: 1rem 0 0 0;
  gap: 2rem;
  /* opacity: 1; */

  background-color: (255, 255, 255, 0.5);
`;

export const shortcutIcon = css`
  display: flex;
  flex-direction: column; /* Display the content in a column layout */
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
  border-radius: 8px;
  padding: 0.5rem;
  height: auto; /* Adjust height to fit content */
  @media screen and (max-width: 600px) {
    padding: 1px;
  }
  & > span {
    padding: 0; /* Remove padding for the span element */
    font-size: 20px;
    color: antiquewhite;
    @media screen and (max-width: 600px) {
      font-size: 10px;
    }
  }

  & > svg {
    background-color: rgba(
      255,
      255,
      255,
      0.5
    ); /* Add background color to the svg element */
    padding: 10px; /* Add padding to the icons if desired */
    border-radius: 20%; /* Add border-radius to make icons round */
    &:hover {
      transform: translateY(-5px) translateX(2px);
      box-shadow: 5px 5px rgba(0, 50, 0, 0.3);
    }
  }
`;
