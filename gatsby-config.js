module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'Cristóbal Valenzuela',
    description: 'Cristobal Valenzuela Barrera. Co-Founder @ Runway',
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58925118-4",
        head: false,
      },
    },
  ],
}