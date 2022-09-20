import React, { useContext } from 'react';
import Nav from '@components/shared/nav';
import Sidebar from '@components/shared/sidebar';
import './section.scss';
import { ScreenWidthContext } from '@root/context/screenWidthContext';
import clsx from 'clsx';

export default function Section({
  children,
  section,
  title,
  showSidebar = true,
  isFullVerticalHeight = true,
}) {
  const { isMobile } = useContext(ScreenWidthContext);
  return (
    <section
      className={clsx(
        section,
        'section-container',
        !isFullVerticalHeight && 'removeHeight'
      )}
      id={section}
    >
      {!isMobile && <Nav section={section} />}
      {title && <h2 className="section-heading">{title}</h2>}
      {children}
      {showSidebar && <Sidebar section={section} />}
    </section>
  );
}
