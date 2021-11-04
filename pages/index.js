import { useEffect } from "react";
import Layout from "components/Layout";

import Link from "next/link";
import Typical from "react-typical";

const Index = ({ initialQueriesData }) => {
  return (
    <Layout>
      <div className="flex items-center justify-center leading-relaxed">
        <div className="w-full px-5 md:w-2/3 lg:w-3/6">
          <Typical
            steps={[
              "Welcome!",
              2000,
              "Bienvenu!",
              2000,
              "أهْلاً وسَهْلاً",
              2000,
              "Benvenuto!",
              2000,
              "Добро пожаловать!",
              2000,
            ]}
            loop={Infinity}
            wrapper="h1"
          />
          <ul className="mt-6 text-justify hyphens">
            I’m Ragnor. I'm a builder, independent researcher and aspiring
            polymath.
            <br />
            <br />
            <li>
              I studied Artifical Intelligence and Computer Science at the
              University of Edinburgh and wrote my thesis on computational drug
              discovery.
            </li>
            <li>
              I am interested in how Information Theory connects the seemingly
              unrelated fields of Machine Learning, Bayesian Inference,
              Thermodynamics, Systems Biology and Reinforcement Learning.{" "}
            </li>
            <li>
              I am passionate about Synthetic Biology and how we can program
              Biology to better understand complex biological systems and solve
              important problems in medicine and the environment.
            </li>
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
            <br />
            Aside from work I am passionate about learning languages (currently
            Arabic), playing sports with friends and adventure travel.
            {/* <br />I also compile a{" "}
            <Link href="/collections/">
              <a className="underline text-black">collection</a>
            </Link>
            &nbsp;of books, movies, and articles I particularly like and
            recommend. */}
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
          </ul>
          <img src="/img/signature.png" className="h-24 mt-8" />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
