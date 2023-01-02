import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import BoxText from "../components/box-text"
import Layout from '../components/layout'

const BlogPostTemplate = ({ data: {mdx}, children}) => {

  const components = { BoxText }

  return (
    <Layout>
      <h2>{mdx.frontmatter.title}</h2>
      <Link to="/blog">to blog</Link>
      <MDXProvider components={components} >
        {children}
      </MDXProvider>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mdx {
      frontmatter {
        title
      }
    }
  }
  `