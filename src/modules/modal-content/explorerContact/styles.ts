import { css } from "@emotion/react";

export const container = css`
  width: 99.5%;
  height: 33vw;
  border-top: 2vw solid black;
  border-bottom: 2px solid black;

  border-right: 1px solid black;
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const contactContainer = css`
  width: 100%;
  height: 33vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom right, black, grey);
  .css-kifl40-Contact {
    border-radius: 0;
    min-height: 0;
    height: 32vw;
  }
`;
