import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="beforeInteractive"
          src="https://js.sentry-cdn.com/68cc3a2470fa9f2f23211e6e074a9bc2.min.js"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
