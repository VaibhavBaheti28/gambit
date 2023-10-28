import { css } from "@emotion/react";

export const aboutContainer = css`
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h1 {
    padding: 0;

    margin: 0;
    font-size: 3vw;
    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
    /* ${typeof window !== "undefined"
      ? window.innerWidth <= 500
        ? { fontSize: "3rem" }
        : {}
      : {}} */
  }
  p {
    font-size: 2vw;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
    /* ${typeof window !== "undefined"
      ? window.innerWidth <= 500
        ? { fontSize: "1rem" }
        : {}
      : {}} */
  }
`;

export const whoami = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding: 0;
    margin: 0;
  }
`;
