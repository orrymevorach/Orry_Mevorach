const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.orrymevorach.com`,
  },
  plugins: [
    'gatsby-plugin-sass',
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
