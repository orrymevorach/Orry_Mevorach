import React, { useContext } from 'react';
import { portfolioPieceData } from 'components/sections/portfolio/portfolio';
import { VisibleSectionContext } from 'context/visibleSectionContext';
import clsx from 'clsx';
import styles from './portfolio-section.module.scss';
import sidebarStyles from '../sidebar.module.scss';

export default function PortfolioSection({ listItem }) {
  const { sectionInViewport } = useContext(VisibleSectionContext);
  return (
    <div className={styles['portfolio-container']}>
      <li>
        <a className={sidebarStyles['list-item']} href={`#${listItem}`}>
          {listItem}
        </a>
      </li>
      <ul className={styles.portfolioList}>
        {portfolioPieceData.map(({ title, shortenedTitle }) => (
          <li key={shortenedTitle || title}>
            <a
              className={clsx(
                styles['portfolio-link'],
                sidebarStyles['list-item'],
                sectionInViewport === title ? sidebarStyles.active : ''
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
