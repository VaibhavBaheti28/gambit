import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          border: "0",
          margin: "0 0",
          outline: 0,
          padding: 0,
          cursor: `url(https://cdn.custom-cursor.com/db/cursor/32/cute_chill_cat_cursor.png) , default !important;`,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
