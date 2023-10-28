import { css } from "@emotion/react";

export const projectContainer = css`
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  a {
    padding: 0;
    margin: 0;
    font-size: 40px;
    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
  }
  div {
    font-size: 30px;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
`;
