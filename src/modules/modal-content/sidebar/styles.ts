import { mediaQueryMaxWidth } from "@/styles/common-styles";
import { css } from "@emotion/react";

export const sidebar = css`
  padding: 0;
  position: sticky;
  background-color: slategray;
  border-left: 3px solid black;
  border-bottom: 2px solid black;

  border-right: 4px solid black;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  width: fit-content;
  div {
    padding: 0;
    border: 0;
    margin: 0;
    font-size: 40px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      font-size: 18px;
      padding: 1rem 0;
    }
    padding: 1vw 0;
    width: 100%;
  }
  div:hover {
    cursor: pointer;
    background-color: darkgray;
  }
`;

export const explore = css`
  border-bottom: 3px solid black;
  svg {
    width: 2vw;
    height: 2vw;
  }
  @media screen and (max-width: 600px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
