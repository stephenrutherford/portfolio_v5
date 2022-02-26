import client from "../../graphqlClient";
import { gql } from "graphql-request";
import Link from "next/link";
import { NextSeo } from "next-seo";

function index({ works }) {
  const SEO = {
    title: "Works - Stephen Rutherford",
    description: "Works developed by Stephen Rutherford.",
    openGraph: {
      title: "Works - Stephen Rutherford",
      description: "Works developed by Stephen Rutherford.",
    },
  };

  return (
    <div className="flex flex-col prose max-w-none min-h-[calc(100vh-18rem)] prose-a:no-underline">
      <NextSeo {...SEO} />
      <h1>List of Works</h1>
      {works.map((work, i) => (
        <ul key={i}>
          <Link href={`/works/${work.slug}`}>
            <a>
              <li className="">{work.title}</li>
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
        works(orderBy: createdAt_DESC, stage: PUBLISHED) {
          title
          slug
        }
      }
    `
  );

  const { works } = data;

  return {
    props: {
      works,
    },
  };
}
