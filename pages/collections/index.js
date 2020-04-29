import Masonry from "react-masonry-css";
import Layout from "../../components/layout";
import Link from "next/link";
import { Book, Video, Zap, User } from "react-feather";

const ListItem = ({ href, title, icon }) => {
  return (
    <Link href={href}>
      <a className="shadow-black rounded-lg mb-6 flex items-center justify-start h-20 pl-10">
        {icon}
        <p className="ml-5">{title}</p>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <Layout>
      <div class="flex">
        <div class="pl-18 lg:pl-32 w-full leading-relaxed">
          <h1 class="text-5xl font-bold mb-12">
            <span class="text-primary">C</span>ollections
          </h1>
          <Masonry
            className="w-auto flex"
            columnClassName="px-5"
            breakpointCols={{
              default: 4,
              1000: 3,
              700: 2,
              500: 1,
            }}
          >
            <ListItem
              icon={<Book></Book>}
              title="Books"
              href="/collections/books"
            ></ListItem>
            <ListItem
              icon={<Video></Video>}
              title="Movies and Series"
              href="/collections/movies"
            ></ListItem>
            <ListItem
              icon={<Zap></Zap>}
              title="Tools and Services"
              href="/collections/tools"
            ></ListItem>
            <ListItem
              icon={<User></User>}
              title="People"
              href="/collections/people"
            ></ListItem>
          </Masonry>
        </div>
      </div>
    </Layout>
  );
};
