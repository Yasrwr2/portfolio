import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container";
import Sidebar from "../components/sidebar";

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Container />
    </Layout>
    <Sidebar />
  </>
)

export default IndexPage
