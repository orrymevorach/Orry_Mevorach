import React, { useState, useContext, useEffect } from 'react';
import { sectionsList } from 'components/shared/nav';
import styles from './sidebar.module.scss';
import { VisibleSectionContext } from 'context/visibleSectionContext';
import PortfolioSection from './portfolio-section';
import clsx from 'clsx';

function useShowSidebar({ mainSectionRef, setIsSidebarShowing }) {
  useEffect(() => {
    const bottomOfMainSection = mainSectionRef?.current?.clientHeight;
    const handleScroll = () => {
      const hasScrolledPassedMainSection =
        window.scrollY > bottomOfMainSection - 1;
      if (!bottomOfMainSection || hasScrolledPassedMainSection) {
        setIsSidebarShowing(true);
      } else {
        setIsSidebarShowing(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mainSectionRef, setIsSidebarShowing]);
}

export default function Sidebar({ mainSectionRef, portfolioPieces }) {
  const [isSidebarShowing, setIsSidebarShowing] = useState(false);
  const { sectionInViewport } = useContext(VisibleSectionContext);
  useShowSidebar({ mainSectionRef, setIsSidebarShowing });

  const fadeAnimationClass = 'fade-left';
  return (
    <>
      {isSidebarShowing && (
        <nav className={styles.sidebar} data-aos={fadeAnimationClass}>
          <ul className={styles.sectionsList}>
            {sectionsList.map(listItem => {
              const isPortfolioSection = listItem === 'portfolio';
              if (isPortfolioSection)
                return (
                  <PortfolioSection
                    listItem={listItem}
                    key={listItem}
                    portfolioPieces={portfolioPieces}
                  />
                );
              return (
                <li key={listItem}>
                  <a
                    className={clsx(
                      styles['list-item'],
                      sectionInViewport === listItem ? styles.active : ''
                    )}
                    href={`#${listItem}`}
                  >
                    {listItem}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
