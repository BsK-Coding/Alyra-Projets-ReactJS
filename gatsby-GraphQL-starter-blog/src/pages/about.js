import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ siteTitle, location }) => {
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About us" />
      <h1>About us</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`