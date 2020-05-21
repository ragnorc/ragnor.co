import Layout from "components/layout";
import { request } from "graphql-request";

export default ({ items, heading }) => {
  console.log(items);
  return (
    <Layout>
      <div class="pl-18 lg:pl-32 w-2/3 leading-relaxed">
        <h1 class="text-5xl font-bold mb-5">
          <span class="text-primary">{heading[0]}</span>
          {heading.slice(1)}
        </h1>
        {items.map((item) => (
          <a href={item.url} target="_blank" class="underline">
            {item.name}
            <br />
          </a>
        ))}
      </div>
    </Layout>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { collection: "books" } },
      { params: { collection: "movieSeries" } },
      { params: { collection: "toolServices" } },
      { params: { collection: "people" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  let maps = {
    books: {
      heading: "Books",
    },
    movieSeries: {
      heading: "Movies and Series",
    },
    toolServices: {
      heading: "Tools and Services",
    },
    people: {
      heading: "People",
    },
  };
  return {
    props: {
      heading: maps[params.collection].heading,
      items: (
        await request(
          "https://api.ragnor.co/graphql",
          `query {
          ${params.collection} {
            id
            name
            url
          }
        }
        `
        )
      )[params.collection],
    },
  };
}
