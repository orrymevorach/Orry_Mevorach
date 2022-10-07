import React from 'react';
import './bouncing-arrow.scss';
import clsx from 'clsx';

export default function BouncingArrow({ href, classNames = '' }) {
  return (
    <a href={href} className={clsx('chevron-link', classNames)}>
      <i className="fas fa-chevron-down"></i>
    </a>
  );
}
