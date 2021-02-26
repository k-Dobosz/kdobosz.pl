module.exports = {
  siteMetadata: {
    title: `kDobosz`,
    description: `Konrad Dobosz is a web developer who lives in Poland, specialized in writing browser applications.`,
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
        icon: `icon.png`
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disable: false,

        selector: '[data-sal]',
        animateClassName: 'sal-animate',
        disabledClassName: 'sal-disabled',
        rootMargin: '0% 50%',
        enterEventName: 'sal:in',
        exitEventName: 'sal:out',
      }
    }
  ],
}
