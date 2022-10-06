import React from 'react';
import Section from '@components/shared/section';
import './portfolio.scss';
import PortfolioPiece from './portfolio-piece';
import { s3 } from '@utils/constants';

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
    src: `${s3}/portfolio-pieces/sdm.png`,
    alt: 'Shoppers Drug Mart',
    href: 'https://shop.shoppersdrugmart.ca/',
    description:
      'I worked at Loblaw Digital full time for 3.5 years. My highlights in that time include rebuilding the checkout, product listing, and landing pages, integrating Contentful into our CMS pages, and building an order tracker. Rebuilding our pages meant modernizing our technology stack from one that was built on JSP pages and jQuery, to one built on React and GraphQL.',
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
    src: `${s3}/portfolio-pieces/highlands.png`,
    alt: 'Highlands Music Festival',
    href: 'https://highlandsmusicfestival.ca/',
    description:
      'A freelance project for a music festival. The goal of this project was to provide information and drive traffic to the Eventbrite ticketing page. I worked together with the founding committee and a web designer to bring this project to life.',
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
    src: `${s3}/portfolio-pieces/casa.png`,
    alt: 'Casa Horizon Website',
    href: 'https://casahorizon.com',
    description:
      'An ongoing freelance project for a hostel in Nicargua. The goal of this project is to provide information and to enable guests the ability to make bookings online. We have worked with various booking platform over the last few years.',
  },
  {
    technology: ['Shopify', 'Liquid'],
    title: 'Head & Heart SK',
    src: `${s3}/portfolio-pieces/headandheart.png`,
    alt: 'Head & Heart Website',
    href: 'https://headandheartsk.com/',
    description:
      'A freelance project for an apparel company that raises money and awareness for mental health. I used a Shopify template for every page, and built a few custom components using Liquid for the product listing pages.',
  },
  {
    technology: ['React', 'Firebase Auth + DB + Hosting', 'Next.JS', 'Paypal'],
    title: 'Breadbox Bakery',
    src: `${s3}/portfolio-pieces/breadbox.png`,
    alt: 'Breadbox Bakery',
    href: 'https://breadboxbakery.ca',
    description:
      'A freelance project for a bakery. This website allowed customers to create an account, schedule weekly deliveries, and make payments online. *This website is no longer running since the bakery has shut down.',
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
