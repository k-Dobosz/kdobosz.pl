module.exports = {
  siteMetadata: {
    title: `kDobosz`,
    description: `Konrad Dobosz`,
    keywords: `Konrad Dobosz, Konrad, Dobosz, kdobosz, Developer, HTML, CSS, JS, Javascript, NodeJS, Python, React, Gatsby`,
    author: `Konrad Dobosz`,
  },
  pathPrefix: "/kdobosz.pl",
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154900780-1",
        head: false,
        anonymize: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kdobosz.pl`,
        short_name: `kdobosz.pl`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f3f3f3`,
        display: `browser`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`
  ],
}
