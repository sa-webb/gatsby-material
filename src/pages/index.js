import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CssBaseline from '@material-ui/core/CssBaseline';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CssBaseline />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
  </Layout>
)

export default IndexPage
