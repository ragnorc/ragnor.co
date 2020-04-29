import Masonry from "react-masonry-css";
import Layout from "../../components/layout";
import Link from "next/Link";

export default () => {
  return (
    <Layout>
      <div class="pl-18 lg:pl-32 w-full leading-relaxed">
        <h1 class="text-5xl font-bold mb-12">
          <span class="text-primary">P</span>rojects
        </h1>
        <Masonry
          className="w-auto flex"
          columnClassName="px-5"
          breakpointCols={{
            default: 3,
            1000: 2,
            700: 1,
            400: 1,
          }}
        >
          <Link href="/projects/predikon">
            <a>
              <div class="shadow-black rounded-lg mb-6">
                <div class="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img class="w-1/5 h-auto" src="/img/logos/epfl.svg" />
                  <div class="border-l-2 h-10 border-black mx-5"></div>
                  <h2 class="text-lg">Predikon</h2>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/projects/hyped">
            <a>
              <div class="shadow-black rounded-lg mb-6">
                <div class="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img class="w-1/10 h-auto" src="/img/logos/hyped.png" />

                  <div class="border-l-2 h-10 border-black mx-5"></div>
                  <h2 class="text-lg">Hyperloop</h2>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/projects/coursework">
            <a>
              <div class="shadow-black rounded-lg mb-6">
                <div class="flex w-full justify-center items-center h-48 xxl:h-64">
                  <img class="w-1/6 h-auto" src="/img/logos/edinburgh.png" />

                  <div class="border-l-2 h-10 border-black mx-5"></div>
                  <h2 class="text-lg">Coursework</h2>
                </div>
              </div>
            </a>
          </Link>
        </Masonry>
      </div>
    </Layout>
  );
};
