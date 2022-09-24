import React, { useContext } from 'react';
import { portfolioPieceData } from '@components/sections/portfolio/portfolio';
import { VisibleSectionContext } from '@root/context/visibleSectionContext';
import clsx from 'clsx';
import './portfolio-section.scss';

export default function PortfolioSection({ listItem }) {
  const { sectionInViewport } = useContext(VisibleSectionContext);
  return (
    <div className="portfolio-container">
      <li>
        <a href={`#${listItem}`}>{listItem}</a>
      </li>
      <ul className="portfolioList">
        {portfolioPieceData.map(({ title, shortenedTitle }) => (
          <li key={shortenedTitle || title}>
            <a
              className={clsx(
                'portfolio-link',
                sectionInViewport === title ? 'active' : ''
              )}
              href={`#${title}`}
            >
              {shortenedTitle || title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
