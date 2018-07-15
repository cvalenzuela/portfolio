module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'Cristóbal Valenzuela',
    description: 'Cristobal Valenzuela Barrera. Building ML/AI tools for artists and designers. Researcher @ ITP NYU',
    keywords: 'Cristobal, Valenzuela, Barrera, machine, learning, artificial intelligence, ml, ai, itp, nyu',
    url: "https://cvalenzuelab.com/",
    userTwitter: "@c_valenzuelab"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}