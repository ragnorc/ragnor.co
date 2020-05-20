import Image from "components/image";
import Layout from "components/layout";

export default () => {
  return (
    <Layout>
      <div className="flex flex-col px-18 lg:px-24 w-full leading-relaxed">
        <div className="flex mb-20">
          <div>
            <h1 className="text-5xl font-bold mb-8">Predikon</h1>
            <p>
              <strong>Type:</strong> Research Internship
            </p>
            <p>
              <strong>Period:</strong> June - August 2019
            </p>
            <p>
              <strong>Collaborators:</strong>&nbsp;
              <a
                target="_blank"
                className="underline"
                href="https://people.epfl.ch/victor.kristof?lang=en"
              >
                Victor Kristof
              </a>
              ,
              <a
                target="_blank"
                className="underline"
                href="https://people.epfl.ch/patrick.thiran?lang=en"
              >
                Patrick Thiran
              </a>
              ,
              <a
                target="_blank"
                className="underline"
                href="https://people.epfl.ch/matthias.grossglauser?lang=en"
              >
                Matthias Grossglauser
              </a>
            </p>
            <p>
              <strong>Location:</strong> Lausanne, Switzerland
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                target="_blank"
                className="underline"
                href="http://predikon.ch"
              >
                predikon.ch
              </a>
            </p>

            <a href="https://epfl.ch">
              <Image className="w-1/6 h-auto mt-5" path="predikon/epfl.svg" />
            </a>
          </div>
        </div>
        <p>
          This report aims at illustrating some of the work I did during my
          research internship at the Information and Network Dynamics Lab of
          EPFL. The work consisted for the first part of the analysis of
          high-dimensional political data using dimensionality reduction
          techniques such as PCA and t-SNE and for the second part of predictive
          models for vote results.
        </p>

        <p className="mt-5">
          The Swiss Confederation is a semi-direct democracy that regularly
          gives its citizens the opportunity to vote on a variety of issues on
          every political level. Several times a year, Swiss citizens vote in
          referenda that are mandatory for constitutional amendments and
          optional for contestations of new or revised laws. As part of the open
          government initiative, Swiss authorities publish data about the
          federal votes, which offers a unique opportunity for gaining a better
          understanding of the political landscape in Switzerland. Figure 1
          illustrates the vote results of the referendum on EEA membership
          (Arrêté fédéral sur l'espace économique européen). In the linear color
          scale, red represents the rejection and green the acceptance of the
          proposal.
        </p>
        <div className="flex flex-col items-center w-100 mb-10">
          <Image
            className="mt-5 mb-5 w-1/2"
            path="predikon/predikon-results.png"
          ></Image>
          <p>
            Figure 1: Vote results of the Swiss Referendum on membership in the
            European Economic Area (EEA)
          </p>
        </div>
        <p>
          Another interesting approach in data analysis is dimensionality
          reduction. In its essence, it is a transformation of high-dimensional
          data to a lower-dimensional vector space that ideally corresponds to
          the intrinsic dimensionality of the oberserved data and can reproduce
          most of its variability. The most common dimensionality reduction
          technique, Principal Component Analysis (PCA), constructs a
          lower-dimensional linear subspace by using an orthogonal
          transformation to convert a set of random variables to a set of values
          of linearly independent variables, called principal components, onto
          which the variance retained under projection is maximal.
        </p>
        <p>
          In the context of Switzerland's political landscape, we use PCA to
          identify certain ideological patterns. The outcomes by municipality of
          the federal votes from June 1981 to May 2019 form our underlying
          dataset, excluding the results of municipalities that have been merged
          during the period we are considering. The dataset can then be
          represented as a high-dimensional vector space where each dimension
          corresponds to a federal vote and each municipality to a data point in
          the space. We then perform a PCA using Singular Value Decomposition
          (more info here) to extract the first two principal components that
          can be interpreted as concepts capturing most of the variablity of the
          original complete set of federal votes. Figure 2 shows a scatter plot
          of the data points that were projected onto the principal components,
          clustered by language. It can actually be shown that the axes refer to
          traditional ideological seperations (left against right and liberal
          against conservative).
          <sup>1</sup>
          In the visualisation in Figure 3, we use a color gradient to assign
          municipalities to colours that correspond to their position in the
          two-dimensional space. Municipalities that are ideologically similar
          share a similar colour. The cultural difference between
          French-speaking municipalities and German-speaking ones is very
          apparent on the map and is commonly referred to as the "Röstigraben".
        </p>
        <div className="flex flex-row flex-wrap justify-center w-100 mt-10 mb-20">
          <div className="flex flex-col items-center justify-center">
            <Image path="predikon/pca.svg" />
            <p className="mt-2 mb-10">Figure 2: Scatter plot of PCA</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image path="predikon/pcaMap.svg" />
            <p className="mt-2 mb-10">
              Figure 3: Voting patterns in Swiss municipalities
            </p>
          </div>
        </div>
        <p>
          T-distributed stochastic neighbor embedding (t-SNE) is another
          dimensionality reduction technique that, in contrast to PCA, has the
          ability to capture non-linear relationships in the voting data. Simply
          explained, it works by minimising the divergence between the
          distribution that measures pairwise similarities of the input objects
          and the distribution that measures pairwise similarities of the
          corresponding points in the lower-dimensional embedding. In line with
          the principal component analysis, the scatter plot in Figure 3
          illustrates the clustering in voting behavior by the language spoken
          in each municipality.
        </p>
        <div className="flex flex-col items-center w-100 my-10">
          <Image className="mt-5 mb-2 w-2/5" path="predikon/tsne.svg"></Image>
          <p>Figure 4: Scatter plot of t-SNE</p>
        </div>
        <h2 className="text-xl font-bold mb-2">Reference papers</h2>
        <p>
          Etter V, Herzen J, Grossglauser M, Thiran P. 2014 Mining Democracy.
        </p>
        <p>
          Etter V, Khan ME, Grossglauser M, Thiran P. 2016 Online Collaborative
          Prediction of Regional Vote Results.
        </p>
      </div>
    </Layout>
  );
};
