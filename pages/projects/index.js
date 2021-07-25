import Masonry from "react-masonry-css";
import Layout from "components/layout";
import Image from "next/image";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 w-full leading-relaxed">
        <h1 className="text-5xl font-bold mb-12">
          <span className="text-primary">P</span>rojects
        </h1>
        <Masonry
          className="w-auto flex"
          columnClassName="px-5"
          breakpointCols={{
            default: 3,
            1150: 2,
            700: 1,
            400: 1,
          }}
        >
          <Link href="/projects/predikon">
            <a>
              <div className="shadow-black rounded-xl mb-6 bg-white">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <Image width="50px" height="50px" src="/img/logos/epfl.svg" />

                  <div className="border-l-2 h-10 border-black mx-5"></div>
                  <h2 className="text-lg">Predikon</h2>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/projects/hyped">
            <a>
              <div className="shadow-black rounded-xl mb-6 bg-white">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <Image
                    width="50px"
                    height="50px"
                    src="/img/logos/hyped.png"
                  />

                  <div className="border-l-2 h-10 border-black mx-5"></div>
                  <h2 className="text-lg">Hyperloop</h2>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/projects/coursework">
            <a>
              <div className="shadow-black rounded-xl mb-6 bg-white">
                <div className="flex w-full justify-center items-center h-48 xxl:h-64">
                  <Image
                    width="50px"
                    height="50px"
                    src="/img/logos/edinburgh.png"
                  />

                  <div className="border-l-2 h-10 border-black mx-5"></div>
                  <h2 className="text-lg">Coursework</h2>
                </div>
              </div>
            </a>
          </Link>
        </Masonry>
      </div>
    </Layout>
  );
};
