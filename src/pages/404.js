import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Not Found">
    <SEO title="404: Not found" />
    <Link className="btn btn-primary text-uppercase" to={"/"}>
      Go Home
    </Link>
  </Layout>
)

export default NotFoundPage
