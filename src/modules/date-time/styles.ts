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
  align-items: center;
  gap: 5rem;
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
  span {
    font-size: 1vw;
    @media screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
`;
