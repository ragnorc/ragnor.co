// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import * as snippet from "@segment/snippet";

class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      apiKey: process.env.SEGMENT_KEY,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true,
    };

    if (process.env.NODE_ENV === "development") {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  render() {
    return (
      <Html className="h-full">
        <Head>
          <link rel="shortcut icon" href="/logos/rc.png" />
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function (d, u, h, s) {
                  h = d.getElementsByTagName('head')[0];
                  s = d.createElement('script');
                  s.async = 1;
                  s.src = u + new Date().getTime();
                  h.appendChild(s);
                })(document, 'https://grow.clearbitjs.com/api/pixel.js?v=');`,
            }}
          />
        </Head>
        <body
          className="font-sans text-md h-full w-full"
          style={{ backgroundColor: "#f7f2f2" }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
