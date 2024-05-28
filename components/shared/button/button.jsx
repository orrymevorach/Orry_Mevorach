import React from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

export default function Button({
  children,
  href,
  classNames,
  isNewPage = false,
}) {
  return (
    <>
      {href ? (
        <a
          href={href}
          target={isNewPage ? '_blank' : ''}
          className={clsx(styles['shrink-border'], classNames)}
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <button className={clsx(styles['shrink-border'], classNames)}>
          {children}
        </button>
      )}
    </>
  );
}
