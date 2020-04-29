import { GraphQLClient } from "graphql-request";

export async function gqlRequest(args) {
  let { query, variables, slug } = args;
  const endpoint = "https://cms.ragnor.co/graphql";
  let token = process.env.ATHENA_TOKEN;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  });
  if (slug && !query) {
    let queryData = await graphQLClient
      .request(
        `
      query($filter: JSON!) {
        myqueries(where: $filter) {
          graphql
          name
          render
        }
      }
    `,
        { filter: { slug } }
      )
      .catch(error => {
        console.log(error.message);
      });
    query = queryData.myqueries[0]?.graphql;
  }

  query =
    query.slice(0, query.lastIndexOf("}", query.lastIndexOf("}") - 1)) +
    "__typename }}";

  let data = await graphQLClient
    .request(query, variables)

    .catch(error => {
      console.log(error.message);
    });

  return data;
}
