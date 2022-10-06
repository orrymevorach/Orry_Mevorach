import React from 'react';
import './button.scss';
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
          className={clsx('shrink-border', classNames)}
        >
          {children}
        </a>
      ) : (
        <button className={clsx('shrink-border', classNames)}>
          {children}
        </button>
      )}
    </>
  );
}
