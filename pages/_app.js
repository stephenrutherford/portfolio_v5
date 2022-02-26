import Layout from "../components/Layout";
import NextNprogress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "highlight.js/styles/base16/material-darker.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextNprogress height={5} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
