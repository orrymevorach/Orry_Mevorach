import React from 'react';
import Section from '@components/shared/section';
import './portfolio.scss';
import PortfolioPiece from './portfolio-piece';

const s3 =
  'https://orry-mevorach.s3.ca-central-1.amazonaws.com/portfolio-pieces';
export const portfolioPieceData = [
  {
    title: 'Shoppers Drug Mart',
    technology: [
      'React',
      'GraphQL',
      'Apollo',
      'Contentful',
      'Next.JS',
      'Redux',
      'Netlify',
      'Gitlab CI/CD',
      'React Testing Library',
    ],
    src: `${s3}/sdm.png`,
    alt: 'Shoppers Drug Mart',
    href: 'https://shop.shoppersdrugmart.ca/',
    description: 'I worked at Loblaw Digital for 3.5 years.',
  },
  {
    title: 'Highlands Music Festival',
    shortenedTitle: 'Highlands',
    technology: [
      'React',
      'Gatsby',
      'Netlify',
      'Google Analytics',
      'Google Maps',
    ],
    src: `${s3}/sdm.png`,
    alt: 'Shoppers Drug Mart',
    href: 'https://shop.shoppersdrugmart.ca/',
    description: 'I worked at Loblaw Digital for 3.5 years.',
  },
  {
    technology: [
      'React',
      'Gatsby',
      'Firebase Hosting',
      'Ezee Reservation System',
    ],
    title: 'Casa Horizon Yoga & Surf Luxury Hostel',
    shortenedTitle: 'Casa Horizon',
    src: `${s3}/casa.png`,
    alt: 'Casa Horizon Website',
    href: 'https://casahorizon.com',
  },
  {
    technology: ['Shopify', 'Liquid'],
    title: 'Head & Heart SK',
    src: `${s3}/headandheart.png`,
    alt: 'Head & Heart Website',
    href: 'https://headandheartsk.com/',
  },
  {
    technology: ['React', 'Firebase Auth + DB + Hosting', 'Next.JS'],
    title: 'Breadbox Bakery',
    src: `${s3}/breadbox.png`,
    alt: 'Breadbox Bakery',
    href: 'https://breadboxbakery.ca',
  },
];

export default function Portfolio() {
  return (
    <Section section="portfolio" isFullVerticalHeight={false}>
      <ul className="portfolio-container">
        {portfolioPieceData.map(
          ({ title, src, alt, href, technology, description }, index) => {
            const isLastItem = index + 1 === portfolioPieceData.length;
            const nextSectionHref = !isLastItem
              ? `#${portfolioPieceData[index + 1].title}`
              : '';
            return (
              <PortfolioPiece
                title={title}
                src={src}
                alt={alt}
                href={href}
                key={title}
                technology={technology}
                description={description}
                nextSectionHref={nextSectionHref}
                index={index}
              />
            );
          }
        )}
      </ul>
    </Section>
  );
}
