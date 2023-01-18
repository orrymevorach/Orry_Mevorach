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
      'I worked at Loblaw Digital full time for 3.5 years, where I grew from a Dev I (junior developer) to a Senior Developer. I was fortunate to work with a talented team that taught me the importance of clean and scaleable code, performance, testing, and accessibility, and eventually I took the reigns of being a tecnical team lead. My feature highlights in that time include rebuilding the checkout, product listing, and landing pages, integrating Contentful into our CMS pages, and building an order tracker.',
  },
  {
    title: 'Midnight Cookie',
    technology: [
      'React',
      'GraphQL',
      'Apollo',
      'Contentful',
      'Next.JS',
      'Netlify',
    ],
    src: `${s3}/portfolio-pieces/midnight-cookie.png`,
    alt: 'Midnight Cookie',
    href: 'https://midnightcookie.ca/',
    description:
      'A freelance project for a late night cookie bakery in Toronto. When I took over this project it was built on Wordpress, however the client had switched to a different e-commerce platform and deemed Wordpress was no longer required. Additionaly, there were performance issues and minor bugs coming from some of the plugins. I rebuilt the pages using React + Next.JS, and integrated Contentful as a headless CMS while using their GraphQL API in conjunction with Apollo to fetch data.',
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
      'This project was extra special because I was a member of the co-founding committee of this musical festival. I worked with the marketing team and a graphic designer to build a website that aimed to provide information about the festival and to drive traffic to the Eventbrite ticketing page. I owned the entire development cycle which included hosting, domain configuration, site development, deployments, and email alias setup. I would also track user engagement during times of heavy traffic, specifically when we launched ticket sale prices.',
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
      'An ongoing freelance project for a hostel in Nicargua. On this project I collaborated with the hostel founder and a freelance designer. The goal was to build an attractive website that provides information about the hostel, and to allow guests the ability to make bookings online. We have worked with various booking platform over the last few years.',
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
      'A freelance project for a specialty bakery that delivers fresh Challah bread to customers on Friday afternoons. This website allowed customers to create an account, schedule weekly deliveries, and make payments online. *This website is no longer running since the bakery has shut down.',
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
