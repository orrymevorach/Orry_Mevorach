import React from 'react';
import './button.scss';
import clsx from 'clsx';

export default function Button({ children, href, classNames }) {
  return (
    <>
      {href ? (
        <a href={href} className={clsx('shrink-border', classNames)}>
          {children}
        </a>
      ) : (
        <button className="shrink-border">{children}</button>
      )}
    </>
  );
}
