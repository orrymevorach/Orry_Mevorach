import React from 'react';
import Section from 'components/shared/section';
import styles from './portfolio.module.scss';
import PortfolioPiece from './portfolio-piece';

export default function Portfolio({ portfolioPieces = [] }) {
  return (
    <Section
      section="portfolio"
      isFullVerticalHeight={false}
      classNames={styles.portfolio}
    >
      <ul className={styles['portfolio-container']}>
        {portfolioPieces.map((props, index) => {
          const isLastItem = index + 1 === portfolioPieces.length;
          const nextSectionHref = !isLastItem
            ? `#${portfolioPieces[index + 1].title}`
            : '';
          return (
            <PortfolioPiece
              {...props}
              key={props.title}
              nextSectionHref={nextSectionHref}
              index={index}
            />
          );
        })}
      </ul>
    </Section>
  );
}
