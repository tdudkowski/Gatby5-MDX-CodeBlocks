module.exports = {
    siteMetadata: {
        title: "G5Mdx",
        description: "Test MDX & GraphQL in G5",
        siteUrl: "https://anyvalidurl.com/",
        pathPrefix: "/Gatby5-MDX-CodeBlocks",
    },
    plugins: [
            {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/src/pages`,
          },
        },
         {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `blog`,
              path: `${__dirname}/src/blog`,
            },
          },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions: [`.mdx`, `.md`],
          },
    },
  ],
}