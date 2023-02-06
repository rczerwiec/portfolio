import * as React from "react";
import Layout from "../components/Layout";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>test</div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
