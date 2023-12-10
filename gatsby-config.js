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
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Kaushan Script`,
            file: `https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap`,
          },
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap`,
          },
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto&display=swap`,
          },
          {
            name: `Noto Sans Mono`,
            file: `https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-JM6DR1VR5E ", // Google Analytics / GA
        ],
      },
    },
  ],
};
