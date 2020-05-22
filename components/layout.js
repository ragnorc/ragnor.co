import Head from "next/head";
import { Menu, X } from "react-feather";
import Link from "next/link";
import ActiveLink from "./activeLink";
import Router from "next/router";
import { useState, useRef, useEffect } from "react";
import Image from "components/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import SiriWave from "siriwave";

import {
  faGithub,
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faGithub,
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedin,
  faLinkedinIn
);

Router.events.on("routeChangeComplete", (url) => {
  window.analytics.page(url);
});

function Layout({ title = "Ragnor Comerford", children }) {
  const wave = useRef();
  const [isOpen, open] = useState(false);
  useEffect(() => {
    new SiriWave({
      container: wave.current,
      speed: 0.02,
      color: "#5b5b5b",
      frequency: 4,
      autostart: true,
    });
  }, []);
  return (
    <div className="flex flex-row h-full w-full h-screen">
      <div
        className={`${
          isOpen ? "hidden" : "block"
        } opacity-25 absolute h-24 top-0 right-0 mt-20 w-full z-20`}
        ref={wave}
      ></div>

      <Head>
        <title>{title}</title>
      </Head>
      <div className="h-full w-full relative">
        <button
          className="absolute right-0 mr-10 mt-10 lg:hidden xl:hidden z-30"
          onClick={() => open(true)}
        >
          <Menu className="h-5"></Menu>
        </button>
        <div className="px-5 md:px-16">
          <header className="mb-24">
            <div className="flex h-24 items-center justify-between">
              <Link href="/">
                <Image className="h-12" path="logos/rc.png" />
              </Link>

              <div className="text-black  flex items-center justify-between hidden lg:block xl:block">
                <ActiveLink activeClassName="text-primary" href="/" exact>
                  <a className={`ml-5 hover:text-primary`}>home</a>
                </ActiveLink>
                <ActiveLink activeClassName="text-primary" href="/about">
                  <a className={`ml-5 hover:text-primary`}>about</a>
                </ActiveLink>
                <ActiveLink activeClassName="text-primary" href="/projects">
                  <a className={`ml-5 hover:text-primary`}>projects</a>
                </ActiveLink>
                <ActiveLink activeClassName="text-primary" href="/collections">
                  <a className={`ml-5 hover:text-primary`}>collections</a>
                </ActiveLink>
                <a
                  target="_blank"
                  className={`ml-5 hover:text-primary`}
                  href="https://storage.ragnor.co/ResumeRagnorComerford.pdf"
                >
                  resume
                </a>
                <ActiveLink activeClassName="text-primary" href="/graphql">
                  <a className={`ml-5 hover:text-primary`}>api</a>
                </ActiveLink>
              </div>
            </div>
          </header>
          {children}
        </div>
        <div className="flex items-center justify-center py-10 mt-40">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex">
              <a href="https://ragnor.co/github" target="_blank">
                <FontAwesomeIcon
                  className="text-2xl md:text-2.5xl mx-6"
                  icon={["fab", "github"]}
                />
              </a>
              <a href="https://ragnor.co/twitter" target="_blank">
                <FontAwesomeIcon
                  className="text-2xl md:text-2.5xl mx-6"
                  icon={["fab", "twitter"]}
                />
              </a>
              <a href="https://ragnor.co/pinterest" target="_blank">
                <FontAwesomeIcon
                  className="text-2xl md:text-2.5xl mx-6"
                  icon={["fab", "pinterest"]}
                />
              </a>
              <a href="https://ragnor.co/linkedin" target="_blank">
                <FontAwesomeIcon
                  className="text-2xl md:text-2.5xl mx-6"
                  icon={["fab", "linkedin-in"]}
                />
              </a>
              <a href="https://ragnor.co/instagram" target="_blank">
                <FontAwesomeIcon
                  className="text-2xl md:text-2.5xl mx-6"
                  icon={["fab", "instagram"]}
                />
              </a>
            </div>
            <p className="mt-12 text-gray-700">
              Ragnor Comerford © 2020 All rights reserved.
            </p>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block opacity-100" : "hidden opacity-0"
          } h-screen bg-white overflow-auto float-right absolute top-0 right-0 transition-opacity transition-1000 w-full z-40`}
        >
          <button className="mt-8 mr-8 float-right" onClick={() => open(false)}>
            <X className="h-5"></X>
          </button>
          <div className="flex flex-col items-end mt-20 mr-8">
            <ActiveLink activeClassName="text-primary" href="/" exact>
              <a>home</a>
            </ActiveLink>
            <ActiveLink activeClassName="text-primary" href="/about">
              <a>about</a>
            </ActiveLink>
            <ActiveLink activeClassName="text-primary" href="/projects">
              <a>projects</a>
            </ActiveLink>
            <ActiveLink activeClassName="text-primary" href="/collections">
              <a>collections</a>
            </ActiveLink>
            <a
              target="_blank"
              className={`ml-5 hover:text-primary`}
              href="https://storage.ragnor.co/ResumeRagnorComerford.pdf"
            >
              resume
            </a>
            <ActiveLink activeClassName="text-primary" href="/graphql">
              <a>api</a>
            </ActiveLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
