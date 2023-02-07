import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
    <Layout>test</Layout>
    </>

  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Błąd</title>
