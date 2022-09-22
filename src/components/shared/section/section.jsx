import React, { useContext } from 'react';
import Sidebar from '@components/shared/sidebar';
import './section.scss';
import clsx from 'clsx';

export default function Section({
  children,
  section,
  title,
  showSidebar = true,
  isFullVerticalHeight = true,
}) {
  return (
    <section
      className={clsx(
        section,
        'section-container',
        !isFullVerticalHeight && 'removeHeight'
      )}
      id={section}
    >
      {title && <h2 className="section-heading">{title}</h2>}
      {children}
      {showSidebar && <Sidebar section={section} />}
    </section>
  );
}
