import { useEffect } from "react";
import Layout from "components/Layout";

import Link from "next/link";
import Typical from "react-typical";

export default ({ initialQueriesData }) => {
  return (
    <Layout>
      <div className="flex items-center justify-center leading-relaxed">
        <div className="w-3/6">
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
          <p className="mt-6 text-justify hyphens">
            I’m Ragnor. I'm a founder, independent researcher and aspiring
            polymath.
            <br />
            <br />
            I recently graduated from the University of Edinburgh in Artifical
            Intelligence and Computer Science.
            <br />
            My research interests are in the area of machine learning, Bayesian
            inference, and systems and synthetic biology. I am particularly
            exhilarated by the idea of engineering biology to solve important
            problems in health, food and environment.
            <br />
            <br />
            📚 I'm currently reading{" "}
            <a
              className="underline text-black"
              href="https://oku.club/book/the-warmth-of-other-suns-by-isabel-wilkerson-D1rpr"
            >
              "The Warmth of Other Suns"
            </a>
            , and{" "}
            <a
              className="underline text-black"
              href="https://oku.club/book/hackers-painters-by-paul-graham-yuinS"
            >
              "Hackers and Painters"
            </a>
            .
            <br />
            <br />
            🛠 I'm building{" "}
            <a className="underline text-black" href="https://edventure.vc">
              Edventure
            </a>
            , an operating system for turning students and researchers into
            entrepreneurs solving global challenges.
            <br />
            <br />
            Aside from work I am passionate about learning languages (currently
            Arabic), playing sports with friends and adventure travel.
            {/* <br />I also compile a{" "}
            <Link href="/collections/">
              <a className="underline text-black">collection</a>
            </Link>
            &nbsp;of books, movies, and articles I particularly like and
            recommend. */}
            <br />
            <br />
            🎧 These days I'm listening to{" "}
            <a
              className="underline text-black"
              href="https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY?si=k9XRh72ES1ynFOkrOTMEYw&dl_branch=1"
            >
              Ozuna
            </a>
            ,{" "}
            <a
              className="underline text-black"
              href="https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c?si=edw2rNlHSFKUXDa6TfJRCg&dl_branch=1"
            >
              Sufjan Stevens
            </a>
            , and{" "}
            <a
              className="underline text-black"
              href="https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c?si=edw2rNlHSFKUXDa6TfJRCg&dl_branch=1"
            >
              Bach
            </a>
            .
            <br />
            <br />
            <a
              className="underline text-black"
              href="https://open.spotify.com/artist/5aIqB5nVVvmFsvSdExz408?si=7f2472307bf44909"
            >
              Say hi on Twitter
            </a>
            , or{" "}
            <a className="underline text-black" href="mailto:hello@ragnor.co">
              drop me an email
            </a>
            .
          </p>
          <img src="/img/signature.png" className="h-24 mt-8" />
        </div>
      </div>
    </Layout>
  );
};
