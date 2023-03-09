import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <script src="https://js.paystack.co/v1/inline.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
