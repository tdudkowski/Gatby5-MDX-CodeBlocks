import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = (data) => {

    return(
        <Layout>
        <h2>Index Page</h2>

<p>Trying to implement <Link to="https://annarossetti.com/articles/custom-code-blocks/">"Custom Code Blocks with MDX & Gatsby"</Link> by Anna Rossetti in Gatsby 5. All other features intentionally not included.</p>

<p>Gatsby from scratch</p>

<pre>npm init -y</pre>
<pre>git init</pre>
<pre>npm i gatsby react react-dom</pre>
<pre>npm i gatsby-plugin-mdx gatsby-source-filesystem @mdx-js/react</pre>
<pre>npm i --legacy-peer-deps prism-react-renderer</pre>
<pre>npm i --legacy-peer-deps parse-numeric-range</pre>



        </Layout>
    )
}

export default IndexPage
