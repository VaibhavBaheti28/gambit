import { css } from "@emotion/react";

export const screen = css`
  position: absolute;
  width: 99%;
  height: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  gap: 1rem;
  font-size: 4rem;
  font-family: Garamond;
`;

export const navStyles = css`
  min-height: 25px;
  width: 65%;
  padding: 1 rem;
  font-size: 2vw;
  font-family: Verdana;
  filter: none;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5vw;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 98%;
  }
  span {
    font-size: 1vw;
    @media screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
`;

export const bodyStyles = css`
  display: flex;
  width: 80%;
  height: 30rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-left: 1rem;
`;
export const taskBarStyles = css`
  display: flex;
  justify-content: space-between;
`;

export const modalStyles = css`
  .MuiModal-backdrop {
    bottom: 70px;
  }
`;

export const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
