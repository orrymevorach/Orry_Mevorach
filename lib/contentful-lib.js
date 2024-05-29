import { createClient } from 'contentful';

export const getClient = () =>
  createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
  });

const client = getClient();

const getItems = items => items.map(item => item.fields);

export const getPortfolioPieces = async () => {
  const entries = await client.getEntries({
    content_type: 'listPostfolioPieces',
  });
  const portfolioPieces = getItems(entries.items)[0].portfolioPieces;
  const formattedPortfolioPieces = getItems(portfolioPieces);
  return formattedPortfolioPieces;
};
