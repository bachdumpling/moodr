import { Html, Main, NextScript } from "next/document";
import { Head } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Moodr</title>
        <meta name="Moodr" content="Mood tracker" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover
          maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
