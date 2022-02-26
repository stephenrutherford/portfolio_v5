import client from "../../graphqlClient";
import { gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { format } from "date-fns";
import { NextSeo } from "next-seo";

export async function getStaticProps({ params }) {
  const { article } = await client.request(
    gql`
      query ArticleQuery($slug: String!) {
        article(where: { slug: $slug }) {
          title
          createdAt
          updatedAt
          seoTags
          content {
            raw
          }
        }
      }
    `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const { articles } = await client.request(
    gql`
      {
        articles(stage: PUBLISHED) {
          slug
          title
        }
      }
    `
  );

  return {
    paths: articles.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

function ArticlePage({ article }) {
  const SEO = {
    title: `${article.title} - Stephen Rutherford`,
    description: `${article.title} by Stephen Rutherford`,
    openGraph: {
      title: `${article.title} - Stephen Rutherford`,
      description: `${article.title} by Stephen Rutherford`,
      url: `https://rutherford.dev/articles/${article.slug}`,
      type: "article",
      article: {
        publishedTime: `${article.createdAt}`,
        modifiedTime: `${article.updatedAt}`,
        section: "Coding",
        tags: `${article.seoTags}`.split(","),
      },
    },
  };

  return (
    <div className="container prose prose-lg min-h-[calc(100vh-18rem)]">
      <NextSeo {...SEO} />
      <h1>{article.title}</h1>
      <p className="italic">
        {format(new Date(article.createdAt), "MMMM dd, yyyy")}
      </p>
      <RichText
        content={article.content.raw.children}
        renderers={{
          code_block: ({ children }) => (
            <pre className="">
              <code className="js">{children}</code>
            </pre>
          ),
        }}
      />
    </div>
  );
}

export default ArticlePage;
