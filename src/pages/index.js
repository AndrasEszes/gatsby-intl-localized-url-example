import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Image from "../components/image"
import Link from "../components/link"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "index.title" })} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {intl.locale === "hu" ? (
        <Link language="en">English</Link>
      ) : (
        <Link language="hu">Hungarian</Link>
      )}
      <br />
      <Link to="/page-2/">
        <FormattedMessage id="index.cta" />
      </Link>
      <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
