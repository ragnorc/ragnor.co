export const GET_QUERY = `
  query($filter: JSON!) {
    myqueries(where: $filter) {
      graphql
      name
      render
    }
  }
`;

export const GET_QUERIES = `
  query {
    myqueries {
      name
      slug
      icon
      render
    }
  }
`;

export const GET_USER = `
  query {
    me {
      id
      username
    }
  }
`;

export const SIGN_IN = `
  mutation Signin($identifier: String!, $password: String!) {
    login(
      input: { provider: "local", password: $password, identifier: $identifier }
    ) {
      user {
        id
      }
      jwt
    }
  }
`;
