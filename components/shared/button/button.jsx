import React from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

export default function Button({
  children,
  href,
  classNames,
  isNewPage = false,
  isSecondary = false,
}) {
  const className = clsx(styles.button, styles['shrink-border'], classNames, {
    [styles.secondary]: isSecondary,
  });
  return (
    <>
      {href ? (
        <a
          href={href}
          target={isNewPage ? '_blank' : ''}
          className={className}
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <button className={className}>{children}</button>
      )}
    </>
  );
}
