const path = require('path');

module.exports = {
  siteMetadata: {
    title: `portfolio-site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@pages': path.resolve(__dirname, './src/pages/'),
          '@components': path.resolve(__dirname, './src/components/'),
          '@utils': path.resolve(__dirname, './src/utils/'),
          '@styles': path.resolve(__dirname, './src/styles/'),
          '@root': path.resolve(__dirname, './src/'),
          '@constants': path.resolve(__dirname, './src/utils/constants.js'),
        },
        extensions: [],
      },
    },
  ],
};
