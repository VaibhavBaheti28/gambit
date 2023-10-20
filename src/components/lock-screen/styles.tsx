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

export const lightBackground = css`
  position: absolute;
  width: 99.99%;
  height: 99.99%;
<<<<<<< HEAD
  background-image: url("static/hill.jpg");
=======
  background-image: url("statichill.jpg");
>>>>>>> 545c7c8f6065678136c9c37bc60198f9972a4318
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 1;
`;

export const darkBackground = css`
  position: absolute;
  width: 99.99%;
  height: 99.99%;
<<<<<<< HEAD
  background-image: url("static/dark.jpg");
=======
  background-image: url("staticdark.jpg");
>>>>>>> 545c7c8f6065678136c9c37bc60198f9972a4318
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 1;
  color: white;
`;

export const navStyles = css`
  font-size: 2vw;
  font-family: Verdana;
  flex-wrap: wrap;
  filter: none;
  border-radius: 8px;
  margin-top: 6vw;
  background-color: grey;
  opacity: 0.5;
  padding: 1rem;
  display: flex;
  gap: 5rem;
`;

export const logo = css`
  border-radius: 50%;
`;
