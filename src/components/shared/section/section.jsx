import React from 'react';
import './section.scss';
import clsx from 'clsx';

export default function Section({
  children,
  section,
  title,
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
    </section>
  );
}
