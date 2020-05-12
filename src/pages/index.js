import React from "react"
import "../styles/global.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
