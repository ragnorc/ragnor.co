import Image from "next/image";
import Layout from "components/Layout";

const Coursework = () => {
  return (
    <Layout>
      <div className="flex flex-col px-18 lg:px-24 w-full leading-relaxed">
        <div className="flex mb-10">
          <div>
            <h1 className="text-5xl font-bold mb-8">Coursework</h1>
            <p>
              <strong>Type:</strong> Coursework
            </p>
            <p>
              <strong>Period:</strong> 2017 - 2021
            </p>

            <p>
              <strong>Location:</strong> University of Edinburgh, UK
            </p>

            <a className="mt-10" href="https://ed.ac.uk">
              <Image
                width="50px"
                height="50px"
                src="/img/logos/edinburgh.png"
              />
            </a>
          </div>
        </div>
        <p className="mb-5">
          Throughtout my degree programme at the University of Edinburgh I was
          able to work on different projects, making use of learned theoretical
          concepts. Some of them can be found in the following Github
          repositories.
        </p>
        <a
          target="_blank"
          className="underline"
          href="https://github.com/ragnorc/PFNL-1"
        >
          Language processing pipeline for Mini-Haskell including lexing,
          parsing, typechecking and evaluation
        </a>

        <a
          target="_blank"
          className="underline"
          href="https://github.com/ragnorc/PFNL-2"
        >
          Computational Semantics with Python, NLTK and Lambda Calculus
        </a>
        <a
          target="_blank"
          className="underline"
          href="https://github.com/ragnorc/INF2D-1"
        >
          Implementation of state space search algorithms with alpha-beta
          pruning
        </a>
        <a
          target="_blank"
          className="underline"
          href="https://github.com/ragnorc/INF2D-2"
        >
          Planning simulation using the Planning Domain Definition Language
          (PDDL)
        </a>
        <a
          target="_blank"
          className="underline"
          href="https://github.com/ragnorc/INF2B-2"
        >
          Implementation of machine learning algorithms (k-NN, Gaussian
          Classifer, k-means Clustering, PCA)
        </a>
      </div>
    </Layout>
  );
};

export default Coursework;
