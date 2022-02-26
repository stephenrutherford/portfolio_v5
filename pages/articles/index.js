import client from "../../graphqlClient";
import { gql } from "graphql-request";
import Link from "next/link";
import { NextSeo } from "next-seo";

function index({ articles }) {
  const SEO = {
    title: "Articles - Stephen Rutherford",
    description: "Articles written by Stephen Rutherford.",
    openGraph: {
      title: "Articles - Stephen Rutherford",
      description: "Articles developed by Stephen Rutherford.",
    },
  };

  return (
    <div className="flex flex-col prose min-h-[calc(100vh-18rem)] prose-a:no-underline">
      <NextSeo {...SEO} />
      <h1>List of Articles</h1>
      {articles.map((article, i) => (
        <ul key={i}>
          <Link href={`/articles/${article.slug}`}>
            <a>
              <li className="">{article.title}</li>
            </a>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const data = await client.request(
    gql`
      {
        articles(orderBy: createdAt_DESC, stage: PUBLISHED) {
          title
          slug
        }
      }
    `
  );

  const { articles } = data;

  return {
    props: {
      articles,
    },
  };
}
