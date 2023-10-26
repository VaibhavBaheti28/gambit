import { css } from "@emotion/react";

export const dateTime = css`
  min-width: 25px;
  width: fit-content;
  font-size: 2vw;
  font-family: Verdana;
  filter: none;
  border-radius: 8px;
  height: 1vw;
  background-color: grey;
  opacity: 0.5;
  padding: 1rem;
  display: flex;
  margin-top: 0.5vw;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  ${typeof window !== "undefined"
    ? window.innerWidth <= 500
      ? { display: "none" }
      : {}
    : {}}
  span {
    font-size: 1vw;
  }
`;
