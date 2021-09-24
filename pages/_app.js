import React from "react";
import App from "next/app";
import "css/main.css";
import PlausibleProvider from "next-plausible";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <PlausibleProvider domain="ragnor.co">
        <Component {...pageProps} />
      </PlausibleProvider>
    );
  }
}

export default MyApp;
