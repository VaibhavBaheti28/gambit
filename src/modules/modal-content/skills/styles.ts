import { css } from "@emotion/react";

export const skillsContainer = css`
  padding: 0;
  margin: 0;

  padding-left: 1vw;

  li {
    list-style-type: square;
    font-size: 30px;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
`;
