import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "page-2.title" })} />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link>Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
