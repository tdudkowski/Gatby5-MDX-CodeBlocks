import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({data}) => {

    return(
        <Layout>
        <h2>Blog Page</h2>
        <ul>
            {data.allMdx.nodes.map(({id, fields, frontmatter}) => (<li key={id}><h3>{frontmatter.title}</h3> <Link to={'/post/' + fields.slug}>{frontmatter.excerpt}</Link></li>))}
        </ul>
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
query MyQuery {
    allMdx {
      nodes {
        body
        id
        fields {
          slug
        }
        frontmatter {
          excerpt
          title
        }
      }
    }
  }
`;
