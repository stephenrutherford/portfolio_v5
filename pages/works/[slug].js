import client from "../../graphqlClient";
import { gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { NextSeo } from "next-seo";

export async function getStaticProps({ params }) {
  const { work } = await client.request(
    gql`
      query WorkQuery($slug: String!) {
        work(where: { slug: $slug }) {
          title
          createdAt
          updatedAt
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
      work,
    },
  };
}

export async function getStaticPaths() {
  const { works } = await client.request(
    gql`
      {
        works {
          slug
          title
        }
      }
    `
  );

  return {
    paths: works.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

function WorkPage({ work }) {
  const SEO = {
    title: `${work.title} - Stephen Rutherford`,
    description: `${work.title} by Stephen Rutherford`,
    openGraph: {
      title: `${work.title} - Stephen Rutherford`,
      description: `${work.title} by Stephen Rutherford`,
      url: `https://rutherford.dev/articles/${work.slug}`,
    },
  };

  return (
    <div className="container prose prose-lg min-h-[calc(100vh-18rem)]">
      <NextSeo {...SEO} />
      <h1>{work.title}</h1>
      <RichText
        content={work.content.raw.children}
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

export default WorkPage;
