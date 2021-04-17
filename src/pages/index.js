import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";
import Sidebar from "../components/sidebar";
import Logo from "../components/logo";

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Container />
    </Layout>
    <Sidebar />
    <Logo />
  </>
)

export default IndexPage
