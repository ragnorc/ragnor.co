import Layout from "components/layout";

export default () => {
  return (
    <Layout>
      <div className="pl-18 lg:pl-32 md:w-3/4 lg:w-3/4 leading-relaxed">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-primary">A</span>PI
        </h1>
        <p className="mb-5">
          The collections found on my website and additional personal
          information such as my education history or work experience can be
          queried using my personal GraphQL API. The playground below includes
          some pre-written queries.
        </p>

        <p>
          <strong>GraphQL Endpoint:</strong>{" "}
          <a href="https://api.ragnor.co/graphql">
            &nbsp;https://api.ragnor.co/graphql
          </a>
        </p>
        <p>
          <strong>GraphQL Playground & Docs:</strong>
          <a href="https://api.ragnor.co/graphql">
            &nbsp;https://api.ragnor.co/graphql
          </a>
        </p>
      </div>
      <div className="w-100 justify-center mt-20 hidden lg:flex md:flex xl:flex xxl:flex">
        <iframe
          src="https://api.ragnor.co/graphql"
          className="rounded-lg w-3/4 h-112 shadow-md"
          name="API Playground"
          scrolling="no"
          frameborder="0"
          marginheight="0px"
          marginwidth="0px"
          allowfullscreen
        ></iframe>
      </div>
    </Layout>
  );
};
