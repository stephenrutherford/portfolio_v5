import Head from "next/head";
import RecentArticles from "../components/RecentArticles";
import RecentWork from "../components/RecentWork";
import { useEffect } from "react";
import hljs from "highlight.js";
import client from "../graphqlClient";
import { gql } from "graphql-request";
import { format } from "date-fns";

export default function Home({ articles, works }) {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div className="min-h-[calc(100vh-18rem)]">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Recent Work */}
        <section className="flex flex-col items-center">
          <h1 className="text-gray-800 text-3xl font-bold uppercase">
            Latest Work
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            {works.map((work, i) => (
              <RecentWork
                key={i}
                linkSrc={`/works/${work.slug}`}
                thumbnailSrc={work.thumbnail.url}
                title={work.title}
                description={work.description}
              />
            ))}
          </div>
        </section>
        {/* Recent Articles */}
        <section className="flex flex-col items-center pt-16">
          <h1 className="text-gray-800 text-3xl font-bold uppercase">
            Recent Articles
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            {articles.map((article, i) => (
              <RecentArticles
                key={i}
                linkSrc={`/articles/${article.slug}`}
                iconSrc={article.icon.url}
                title={article.title}
                date={format(new Date(article.createdAt), "MMMM dd, yyyy")}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await client.request(
    gql`
      {
        articles(first: 3, orderBy: createdAt_DESC, stage: PUBLISHED) {
          title
          description
          icon {
            url
          }
          slug
          createdAt
        }

        works(first: 2, orderBy: updatedAt_DESC, stage: PUBLISHED) {
          title
          description
          thumbnail {
            url
          }
          slug
          updatedAt
        }
      }
    `
  );

  const { articles, works } = data;

  return {
    props: {
      articles,
      works,
    },
  };
}
