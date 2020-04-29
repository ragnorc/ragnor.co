import Masonry from "react-masonry-css";
import Layout from "../../components/layout";
import Link from "next/Link";

export default ({ href, title }) => {
  return (
    <Link href={href}>
      <div class="shadow rounded-lg mb-6 flex items-center justify-start h-20">
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
