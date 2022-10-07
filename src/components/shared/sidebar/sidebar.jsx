import React, { useState, useContext } from 'react';
import { sectionsList } from '@components/shared/nav';
import './sidebar.scss';
import { VisibleSectionContext } from '@root/context/visibleSectionContext';
import PortfolioSection from './portfolio-section';
import clsx from 'clsx';

function showSidebarAfterMainSection({ mainSectionRef, setIsSidebarShowing }) {
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
  window.addEventListener('scroll', handleScroll);
}

export default function Sidebar({ mainSectionRef }) {
  const [isSidebarShowing, setIsSidebarShowing] = useState(false);
  const { sectionInViewport } = useContext(VisibleSectionContext);
  showSidebarAfterMainSection({ mainSectionRef, setIsSidebarShowing });

  const fadeAnimationClass = 'fade-left';
  return (
    <>
      {isSidebarShowing && (
        <nav className="sidebar" data-aos={fadeAnimationClass}>
          <ul className="sectionsList">
            {sectionsList.map(listItem => {
              const isPortfolioSection = listItem === 'portfolio';
              if (isPortfolioSection)
                return <PortfolioSection listItem={listItem} key={listItem} />;
              return (
                <li key={listItem}>
                  <a
                    className={clsx(
                      'list-item',
                      sectionInViewport === listItem ? 'active' : ''
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
