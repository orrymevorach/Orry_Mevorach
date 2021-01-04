import React from 'react';
import Section from '@components/shared/section';
import './portfolio.scss';
import PortfolioPiece from './portfolio-piece';
import { Link } from 'react-router-dom';

const s3 =
  'https://orry-mevorach.s3.ca-central-1.amazonaws.com/portfolio-pieces';
const portfolioPieceData = [
  {
    title: 'Shoppers Drug Mart',
    src: `${s3}/sdm.png`,
    alt: 'Shoppers Drug Mart',
    href: 'https://shop.shoppersdrugmart.ca/',
  },
  {
    title: 'Casa Horizon Yoga & Surf Luxury Hostel',
    src: `${s3}/casa.png`,
    alt: 'Casa Horizon Website',
    href: 'https://casahorizon.com',
  },
  {
    title: 'Head & Heart SK',
    src: `${s3}/headandheart.png`,
    alt: 'Head & Heart Website',
    href: 'https://headandheartsk.com/',
  },
  {
    title: 'DJ Button Bash',
    src: `${s3}/dj.png`,
    alt: 'DJ Button Bash App',
    href: 'https://dj-button-bash.netlify.app/',
  },
  {
    title: 'Breadbox Bakery',
    src: `${s3}/breadbox.png`,
    alt: 'Breadbox Bakery',
    href: 'https://breadboxbakery.ca',
  },
  {
    title: 'Fantasy Golf App',
    src: `${s3}/fantasy.png`,
    alt: 'Fantasy Golf App',
    href: 'https://fantasy-golf.netlify.app/',
  },
  {
    title: 'Wrepit',
    src: `${s3}/wrepit.png`,
    alt: 'Wrepit website',
    href: 'https://wrepit.com',
  },
];

export default function Portfolio() {
  return (
    <Section section="portfolio" title="Portfolio">
      {/* <p className="see-projects">
        Click on a project below, or
        <span>
          <Link to="/portfolio"> click here</Link>
        </span>{' '}
        to see a technical summary my past projects
      </p> */}

      <ul className="portfolio-container">
        {portfolioPieceData.map(({ title, src, alt, href }) => (
          <PortfolioPiece
            title={title}
            src={src}
            alt={alt}
            href={href}
            key={title}
          />
        ))}
      </ul>
    </Section>
  );
}
