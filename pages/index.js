import { useEffect } from "react";
import Layout from "components/layout";

import Link from "next/link";
import Typical from "react-typical";

export default ({ initialQueriesData }) => {
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 leading-relaxed">
        <Typical
          steps={[
            "Salut!",
            2000,
            "Ciao!",
            2000,
            "Hola!",
            2000,
            "Hello!",
            2000,
            "!أهلاً",
            2000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
        <p className="mt-6">
          I’m Ragnor. In case you don’t know me yet, feel free to check my{" "}
          <Link href="/about">
            <a className="underline text-black">about</a>
          </Link>{" "}
          page.
          <br />
          Here, I occasionally write about{" "}
          <Link href="/projects">
            <a className="underline text-black">projects</a>
          </Link>
          &nbsp;I am working on and{" "}
          <Link href="/thoughts/">
            <a className="underline text-black">thoughts and ideas</a>
          </Link>
          &nbsp;I have on different&nbsp;topics.
          <br />I also compile a{" "}
          <Link href="/collections/">
            <a className="underline text-black">collection</a>
          </Link>
          &nbsp;of books, movies, and articles I particularly like and
          recommend.
          <br />
          If you have an interesting project or just want to grab a coffee and
          chat, don’t hesitate to{" "}
          <a className="underline text-black" href="mailto:hello@ragnor.co">
            drop me a message
          </a>
          .
        </p>
        <img src="/img/signature.png" className="h-24 mt-8" />
      </div>
    </Layout>
  );
};
