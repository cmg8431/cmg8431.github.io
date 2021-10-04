module.exports = {
  siteMetadata: {
    title: `학생 개발자의 개발 블로그`,
    description: `테스트 중이에요`,
    author: `mingi`,
    siteUrl: 'https://cmg8431.github.io/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // ssr: false
        // displayName: false,
        // minify: false
        // see docs
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    }, {
      resolve: `gatsby-plugin-no-sourcemaps`,
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://cmg8431.github.io/',
        stripQueryString: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};