import React from 'react';
import styles from './section.module.scss';
import clsx from 'clsx';

export default function Section({
  children,
  section,
  title,
  isFullVerticalHeight = true,
  classNames = {},
}) {
  return (
    <section
      className={clsx(
        styles['section-container'],
        !isFullVerticalHeight && styles['removeHeight'],
        classNames
      )}
      id={section}
    >
      {title && <h2 className={styles['section-heading']}>{title}</h2>}
      {children}
    </section>
  );
}
