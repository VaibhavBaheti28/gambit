import { css } from "@emotion/react";

export const configContent = css`
  background-color: black;
  position: fixed;
  z-index: 100;
  width: 8rem;
  height: 8rem;
  right: 2rem;
  top: 3rem;
  color: white;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: [f] 50% [s] 50% [end];
  grid-template-rows: [f] 4rem [s] 4rem [end];
  align-items: center;
  opacity: 0.5;
  @media screen and (min-width: 800px) {
    right: 11rem;
    top: 0.6rem;
  }
`;

export const name = css`
  width: 40%;
  display: "flex";
  align-items: "center";
  justify-content: "center";
  font-size: "50px";
`;
